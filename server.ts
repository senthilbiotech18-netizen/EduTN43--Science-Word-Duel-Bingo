import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { getOfflineWordList, GENERAL_SCIENCE_WORDS } from "./server/scienceDictionary";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy GoogleGenAI instance initialization helper
function getAI(customApiKey?: string) {
  const apiKey = customApiKey?.trim() || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable or custom API key is missing.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Robust Gemini Caller with model fallback list
async function generateContentWithFallback(prompt: string, config?: any, customApiKey?: string) {
  const ai = getAI(customApiKey);
  const models = ["gemini-3.6-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
  let lastError: any = null;

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config,
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err: any) {
      console.warn(`Gemini call failed with model ${model}:`, err.message || err);
      lastError = err;
    }
  }
  throw lastError || new Error("All Gemini models failed or were quota limited.");
}

// API Health
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Generate 5x5 Bingo Board for a Topic
app.post("/api/generate-bingo-board", async (req, res) => {
  const { topic, customApiKey: bodyApiKey } = req.body;
  const customApiKey = (req.headers["x-gemini-api-key"] as string) || bodyApiKey;

  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Topic is required" });
  }

  try {
    const prompt = `Generate 25 distinct scientific concepts, key terms, or vocabulary words for a 5x5 Bingo Card for the target topic: "${topic}".

STRICT TOPIC ADHERENCE MANDATE:
- Every single item MUST be 100% strictly and directly relevant to the target topic "${topic}".
- IF THE TOPIC IS A CUSTOM OR USER-TYPED TOPIC (such as "${topic}", e.g., "reproduction in plants", "Quantum Mechanics", "Plate Tectonics", "Neuroscience", "Organic Chemistry"), ALL 25 items MUST belong EXCLUSIVELY to that specific topic "${topic}".
- For example, if the topic is "reproduction in plants" or "Plant Reproduction", ALL 25 items MUST be specific plant reproduction terms (such as "Pollination", "Pollen", "Stamen", "Pistil", "Anther", "Stigma", "Ovule", "Endosperm", "Gametophyte", "Sporophyte", "Double Fertilization", "Germination", "Angiosperm", "Gymnosperm", "Carpel", "Filament", "Sepal", "Petal", "Cotyledon", "Radicle", etc.).
- ABSOLUTELY DO NOT include generic, off-topic, or random words (like "Neuron", "Nephron", "Mitochondria", "Hypothesis", "Experiment") if they do not belong to "${topic}".

Each item should be a distinct science term or category (1-3 words max). Return a JSON array of 25 items with 'label', 'targetTermOrCategory', and 'description'.`;

    const textResult = await generateContentWithFallback(
      prompt,
      {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              label: { type: Type.STRING, description: "Short grid label" },
              targetTermOrCategory: {
                type: Type.STRING,
                description: "Target concept or term",
              },
              description: {
                type: Type.STRING,
                description: "1-sentence clue or definition",
              },
            },
            required: ["label", "targetTermOrCategory", "description"],
          },
        },
      },
      customApiKey
    );

    const tiles = JSON.parse(textResult || "[]");
    return res.json({ tiles });
  } catch (err: any) {
    console.warn("Gemini unavailable or quota exceeded for bingo generation. Using offline fallback dictionary.");
    
    // Offline Bingo Generation Fallback
    const wordList = getOfflineWordList(topic);
    const tiles = wordList.slice(0, 25).map((w, idx) => ({
      id: `fallback-tile-${idx + 1}`,
      label: w.word.length > 12 ? w.word.slice(0, 11) + "…" : w.word,
      targetTermOrCategory: w.word,
      description: w.definition,
    }));

    return res.json({ tiles });
  }
});

// Validate student word + AI Turn generation
app.post("/api/validate-and-respond", async (req, res) => {
  const { topic, studentWord, usedWords = [], bingoTiles = [], customApiKey: bodyApiKey } = req.body;
  const customApiKey = (req.headers["x-gemini-api-key"] as string) || bodyApiKey;

  if (!topic || !studentWord) {
    return res
      .status(400)
      .json({ error: "Topic and studentWord are required" });
  }

  const usedWordsList = Array.isArray(usedWords) ? usedWords : [];
  const normalizedInput = String(studentWord).trim();
  const lowerInput = normalizedInput.toLowerCase();

  try {
    const usedWordsStr = usedWordsList.join(", ");
    const tileLabelsList = Array.isArray(bingoTiles)
      ? bingoTiles.map((t: any) => `${t.id}: ${t.label}`).join("; ")
      : "";

    const prompt = `You are an elite science and biology educational game master for "EduTN43 Science Word Battle".
TARGET TOPIC: "${topic}"

Student entered word/phrase: "${normalizedInput}"
Used words in this match so far: [${usedWordsStr}]
Bingo Card Tiles available: [${tileLabelsList}]

STRICT TOPIC ADHERENCE MANDATE:
1. STUDENT WORD VALIDATION:
   - Validate if "${normalizedInput}" is a real, legitimate scientific term STRICTLY relevant to "${topic}".
   - If "${normalizedInput}" is completely unrelated to "${topic}" (e.g., typing "Astronomy" when the topic is "Cell Biology", or typing "Computer" when the topic is "Reproduction in Plants"), mark isValid = false with a clear reason explaining why "${normalizedInput}" does not belong to "${topic}".
   - Check if it was already used in [${usedWordsStr}]. If already used, mark isValid = false with reason "Already used in this match!".
   - FAIR COUNT-BASED POINT SYSTEM: If valid, ALWAYS assign EXACTLY 20 points (score = 20) for any valid scientific term. Do not alter score based on speed or length. Provide concise 1-sentence definition, AND mandatory etymology / word origin (e.g., "From Greek 'pollen' (fine flour)"), plus matchedBingoTileId if applicable.

2. AI COUNTER WORD GENERATION (CRITICAL REQUIREMENT):
   - ABSOLUTE MANDATE: The AI MUST choose a word or term that is 100% STRICTLY AND DIRECTLY RELATED TO THE TARGET TOPIC "${topic}".
   - IF THE TOPIC IS A CUSTOM OR USER-TYPED TOPIC (such as "${topic}", e.g., "reproduction in plants", "Quantum Mechanics", "Plate Tectonics", "Neuroscience"), EVERY SINGLE AI WORD GENERATED MUST BELONG EXCLUSIVELY TO THAT TOPIC "${topic}".
   - DO NOT EVER generate random, off-topic, or generic words (like "Neuron", "Nephron", "Hypothesis", or "Mitochondria") if they do not belong to the chosen topic "${topic}".
   - EXAMPLES OF STRICT TOPIC ADHERENCE:
     * If Topic is "Reproduction in Plants" / "reproduction in plants", AI words MUST be plant reproduction terms: "Pollen", "Pollination", "Stamen", "Pistil", "Anther", "Stigma", "Ovule", "Gametophyte", "Sporophyte", "Endosperm", "Germination", "Angiosperm", "Gymnosperm", "Double Fertilization", "Cotyledon", "Radicle", "Carpel", "Filament", "Sepal", "Petal".
     * If Topic is "Cell Biology & Organelles", AI words MUST be cell biology terms.
     * If Topic is "Genetics & DNA", AI words MUST be genetics terms.
   - The AI word MUST NOT be in [${usedWordsStr}] and MUST NOT be "${normalizedInput}".
   - FAIR POINT SYSTEM: The AI word ALWAYS receives EXACTLY 20 points (score = 20), matching the student's point award for 1 valid word.
   - Provide the AI word, concise 1-sentence definition, mandatory etymology / word origin, fascinating 1-sentence fun fact, score = 20, and matchedBingoTileId if applicable.

CRITICAL: Both 'etymology' fields MUST be provided for both words. Both scores MUST equal 20 for fair count-based point equality. The AI counter word MUST be 100% strictly on topic for "${topic}".

Return strictly JSON conforming to the schema.`;

    const textResult = await generateContentWithFallback(
      prompt,
      {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            studentValidation: {
              type: Type.OBJECT,
              properties: {
                isValid: { type: Type.BOOLEAN },
                reason: { type: Type.STRING },
                normalizedWord: { type: Type.STRING },
                definition: { type: Type.STRING },
                etymology: { type: Type.STRING, description: "Etymology and word origin (e.g. From Greek mitos thread + chondrion granule)" },
                score: { type: Type.INTEGER },
                matchedBingoTileId: { type: Type.STRING },
              },
              required: ["isValid", "normalizedWord", "definition", "etymology", "score"],
            },
            aiTurn: {
              type: Type.OBJECT,
              properties: {
                word: { type: Type.STRING },
                definition: { type: Type.STRING },
                etymology: { type: Type.STRING, description: "Etymology and word origin (e.g. From Greek bios life + logos study)" },
                funFact: { type: Type.STRING },
                score: { type: Type.INTEGER },
                matchedBingoTileId: { type: Type.STRING },
              },
              required: ["word", "definition", "etymology", "funFact", "score"],
            },
          },
          required: ["studentValidation"],
        },
      },
      customApiKey
    );

    const data = JSON.parse(textResult || "{}");

    // Guarantee etymology is present on student validation
    if (data.studentValidation && data.studentValidation.isValid) {
      const studentWordVal = data.studentValidation.normalizedWord || normalizedInput;
      if (!data.studentValidation.etymology || !data.studentValidation.etymology.trim()) {
        const dictWord = getOfflineWordList(topic).find((w) => w.word.toLowerCase() === studentWordVal.toLowerCase());
        data.studentValidation.etymology = dictWord
          ? dictWord.etymology
          : `Derived from classical Greek or Latin scientific root terms in ${topic}.`;
      }
    }

    // Guarantee etymology is present on AI turn
    if (data.aiTurn && data.aiTurn.word) {
      if (!data.aiTurn.etymology || !data.aiTurn.etymology.trim()) {
        const dictWord = getOfflineWordList(topic).find((w) => w.word.toLowerCase() === data.aiTurn.word.toLowerCase());
        data.aiTurn.etymology = dictWord
          ? dictWord.etymology
          : `Derived from classical Greek or Latin scientific root terms in ${topic}.`;
      }
    }

    return res.json(data);
  } catch (err: any) {
    console.warn("Gemini quota exhausted or API error. Executing smooth offline dictionary validation & response.");

    // Check duplicate
    const isDuplicate = usedWordsList.some((w: string) => w.toLowerCase() === lowerInput);
    if (isDuplicate) {
      return res.json({
        studentValidation: {
          isValid: false,
          reason: `"${normalizedInput}" was already used in this match!`,
        },
      });
    }

    // Check word validity via dictionary or general length/structure check
    const wordDictionary = getOfflineWordList(topic);
    const matchedDictWord = wordDictionary.find((w) => w.word.toLowerCase() === lowerInput);

    // If word is at least 2 chars and not obviously gibberish, count as valid
    const isBasicValid = lowerInput.length >= 2 && !/^[0-9]+$/.test(lowerInput);

    if (!isBasicValid) {
      return res.json({
        studentValidation: {
          isValid: false,
          reason: `"${normalizedInput}" is not recognized as a valid science term.`,
        },
      });
    }

    const studentScore = 20;

    const studentDef = matchedDictWord
      ? matchedDictWord.definition
      : `Core scientific concept related to ${topic}.`;

    const studentEtymology = matchedDictWord
      ? matchedDictWord.etymology
      : `Derived from classical Greek or Latin scientific roots related to ${topic}.`;

    // Match student word to bingo tile
    let studentMatchedTileId: string | undefined = undefined;
    if (Array.isArray(bingoTiles) && bingoTiles.length > 0) {
      const tile = bingoTiles.find(
        (t: any) =>
          !t.claimedBy &&
          (t.targetTermOrCategory?.toLowerCase() === lowerInput ||
            t.label?.toLowerCase() === lowerInput)
      );
      if (tile) studentMatchedTileId = tile.id;
    }

    // Select AI Counter Word from unused dictionary terms
    const usedLowerSet = new Set(usedWordsList.map((w: string) => w.toLowerCase()));
    usedLowerSet.add(lowerInput);

    const availableAiWords = wordDictionary.filter((w) => !usedLowerSet.has(w.word.toLowerCase()));
    const aiChoice = availableAiWords.length > 0
      ? availableAiWords[Math.floor(Math.random() * availableAiWords.length)]
      : GENERAL_SCIENCE_WORDS.find((w) => !usedLowerSet.has(w.word.toLowerCase())) || {
          word: "Genome",
          definition: "The complete set of genes or genetic material present in a cell or organism.",
          etymology: "From German 'Genom', blend of 'Gen' (gene) + 'Chromosom' (chromosome).",
          funFact: "If unravelled, the DNA in a single human cell would stretch 6 feet long!",
          score: 20,
        };

    // Match AI word to bingo tile
    let aiMatchedTileId: string | undefined = undefined;
    if (Array.isArray(bingoTiles) && bingoTiles.length > 0) {
      const tile = bingoTiles.find(
        (t: any) =>
          !t.claimedBy &&
          t.id !== studentMatchedTileId &&
          (t.targetTermOrCategory?.toLowerCase() === aiChoice.word.toLowerCase() ||
            t.label?.toLowerCase() === aiChoice.word.toLowerCase())
      );
      if (tile) aiMatchedTileId = tile.id;
    }

    return res.json({
      studentValidation: {
        isValid: true,
        normalizedWord: matchedDictWord ? matchedDictWord.word : normalizedInput.charAt(0).toUpperCase() + normalizedInput.slice(1),
        definition: studentDef,
        etymology: studentEtymology,
        score: studentScore,
        matchedBingoTileId: studentMatchedTileId,
      },
      aiTurn: {
        word: aiChoice.word,
        definition: aiChoice.definition,
        etymology: aiChoice.etymology,
        funFact: aiChoice.funFact,
        score: aiChoice.score,
        matchedBingoTileId: aiMatchedTileId,
      },
    });
  }
});

// Hint / AI Word Suggestion if student is stuck
app.post("/api/get-hint", async (req, res) => {
  const { topic, usedWords = [], customApiKey: bodyApiKey } = req.body;
  const customApiKey = (req.headers["x-gemini-api-key"] as string) || bodyApiKey;

  try {
    const prompt = `Give a clever hint or clue (without saying the exact word directly) for a science word related to topic "${topic}" that is NOT in used list [${usedWords.join(
      ", "
    )}]. Keep it short (1 sentence).`;

    const textResult = await generateContentWithFallback(prompt, undefined, customApiKey);
    return res.json({ hint: textResult.trim() });
  } catch (err: any) {
    console.warn("Gemini quota limit for hint, using offline dictionary hint.");
    
    const usedLowerSet = new Set((usedWords || []).map((w: string) => w.toLowerCase()));
    const wordDictionary = getOfflineWordList(topic);
    const unusedWord = wordDictionary.find((w) => !usedLowerSet.has(w.word.toLowerCase()));

    if (unusedWord) {
      return res.json({
        hint: `Clue: ${unusedWord.definition} (Starts with '${unusedWord.word[0]}')`,
      });
    }

    return res.json({
      hint: "Think about core cellular structures, metabolic pathways, or chemical reactions!",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
