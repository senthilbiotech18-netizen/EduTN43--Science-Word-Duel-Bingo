const fs = require('fs');
const path = require('path');

const mergedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'merged_data.json'), 'utf8'));

function escapeStr(str) {
  if (!str) return '""';
  return JSON.stringify(str);
}

function updateFile(filePath) {
  let header = `export interface OfflineWordInfo {
  word: string;
  definition: string;
  etymology: string;
  funFact: string;
  score: number;
}

`;

  let newDictCode = "export const SCIENCE_DICTIONARIES: Record<string, OfflineWordInfo[]> = {\n";
  const topicsKeys = Object.keys(mergedData);
  topicsKeys.forEach((key, keyIdx) => {
    newDictCode += `  ${JSON.stringify(key)}: [\n`;
    const terms = mergedData[key];
    terms.forEach((t, termIdx) => {
      const comma = termIdx === terms.length - 1 ? "" : ",";
      newDictCode += `    { word: ${escapeStr(t.word)}, definition: ${escapeStr(t.definition)}, etymology: ${escapeStr(t.etymology)}, funFact: ${escapeStr(t.funFact)}, score: 20 }${comma}\n`;
    });
    const keyComma = keyIdx === topicsKeys.length - 1 ? "" : ",";
    newDictCode += `  ]${keyComma}\n`;
  });
  newDictCode += "};\n\n";

  let displayNamesCode = `export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  "characteristics-classification": "1. Characteristics & Classification of Organisms",
  "organisation-organism": "2. Organisation of the Organism",
  "cell-movement": "3. Movement Into & Out of Cells",
  "biological-molecules": "4. Biological Molecules",
  "enzymes": "5. Enzymes & Catalysis",
  "plant-nutrition": "6. Plant Nutrition & Photosynthesis",
  "human-nutrition": "7. Human Nutrition & Digestion",
  "transport-plants": "8. Transport in Plants",
  "transport-animals": "9. Transport in Animals & Circulation",
  "diseases-immunity": "10. Diseases & Immunity",
  "gas-exchange": "11. Gas Exchange in Humans",
  "respiration": "12. Respiration & Energy",
  "excretion-humans": "13. Excretion in Humans",
  "coordination-response": "14. Coordination & Response",
  "drugs-medicine": "15. Drugs & Pharmacology",
  "reproduction": "16. Reproduction in Organisms",
  "inheritance": "17. Inheritance & Genetics",
  "variation-selection": "18. Variation & Natural Selection",
  "organisms-environment": "19. Organisms & Their Environment",
  "human-ecosystem-influence": "20. Human Influences on Ecosystems",
  "biotechnology-genetic-mod": "21. Biotechnology & Genetic Modification",
  "advanced-extension": "22. Advanced / University-Level Extension Terms",
  "cell-biology": "Cell Biology & Organelles",
  "genetics-dna": "Genetics & DNA",
  "photosynthesis-ecology": "Ecology & Photosynthesis",
  "anatomy-physiology": "Human Anatomy & Physiology",
  "chemistry-periodic": "Chemistry & Periodic Table",
  "physics-mechanics": "Physics & Mechanics",
  "astronomy-space": "Astronomy & Space",
  "reproduction-plants": "Plant Reproduction & Botany"
};

`;

  let helperFunctionsCode = `export const GENERAL_SCIENCE_WORDS: OfflineWordInfo[] = [
  { word: "Hypothesis", definition: "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.", etymology: "From Greek 'hypothesis' (supposition).", funFact: "A good hypothesis must be testable and falsifiable!", score: 20 },
  { word: "Experiment", definition: "A scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact.", etymology: "From Latin 'experimentum' (trial/testing).", funFact: "Controlled experiments isolate independent variables to test cause and effect.", score: 20 },
  { word: "Observation", definition: "The action or process of closely monitoring or measuring something to gain information.", etymology: "From Latin 'observare' (watch/attend to).", funFact: "Scientific observations can be quantitative or qualitative.", score: 20 },
  { word: "Analysis", definition: "Detailed examination of the elements or structure of something.", etymology: "From Greek 'analysis' (a dissolving).", funFact: "Data analysis converts raw measurements into meaningful scientific conclusions.", score: 20 },
  { word: "Theory", definition: "A well-substantiated explanation of some aspect of the natural world based on a body of facts.", etymology: "From Greek 'theoria' (contemplation/speculation).", funFact: "Scientific theories are supported by overwhelming empirical evidence.", score: 20 }
];

export function getOfflineWordList(topic: string): OfflineWordInfo[] {
  const topicLower = topic.toLowerCase();

  // Specific domain checks
  if (topicLower.includes("chem") || topicLower.includes("element") || topicLower.includes("periodic") || topicLower.includes("reaction") || topicLower.includes("atom") || topicLower.includes("bond")) {
    if (SCIENCE_DICTIONARIES["chemistry-periodic"]) return SCIENCE_DICTIONARIES["chemistry-periodic"];
  }

  if (topicLower.includes("physic") || topicLower.includes("force") || topicLower.includes("mechanic") || topicLower.includes("motion") || topicLower.includes("wave") || topicLower.includes("electric")) {
    if (SCIENCE_DICTIONARIES["physics-mechanics"]) return SCIENCE_DICTIONARIES["physics-mechanics"];
  }

  if (topicLower.includes("astro") || topicLower.includes("space") || topicLower.includes("star") || topicLower.includes("planet") || topicLower.includes("galaxy") || topicLower.includes("nebula")) {
    if (SCIENCE_DICTIONARIES["astronomy-space"]) return SCIENCE_DICTIONARIES["astronomy-space"];
  }

  // Preset display name matches
  for (const [key, displayName] of Object.entries(CATEGORY_DISPLAY_NAMES)) {
    const keyClean = key.replace(/-/g, " ").toLowerCase();
    const displayClean = displayName.toLowerCase();
    if (displayClean.includes(topicLower) || topicLower.includes(displayClean) || topicLower.includes(keyClean)) {
      if (SCIENCE_DICTIONARIES[key]) {
        return SCIENCE_DICTIONARIES[key];
      }
    }
  }

  // Key match fallback
  for (const [key, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    const keyClean = key.replace(/-/g, " ").toLowerCase();
    if (topicLower.includes(keyClean) || keyClean.includes(topicLower)) {
      return list;
    }
  }

  return SCIENCE_DICTIONARIES["characteristics-classification"] || GENERAL_SCIENCE_WORDS;
}

export function findWordInDictionaries(rawInput: string): { wordInfo: OfflineWordInfo; categoryKey: string } | null {
  const clean = rawInput.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!clean) return null;

  for (const [catKey, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    for (const item of list) {
      const dictClean = item.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (
        dictClean === clean ||
        (clean.length >= 4 && (clean.includes(dictClean) || dictClean.includes(clean)))
      ) {
        return { wordInfo: item, categoryKey: catKey };
      }
    }
  }
  return null;
}

export function validateStudentWordOffline(topic: string, rawInput: string, usedWords: string[]) {
  const cleanInput = rawInput.trim().toLowerCase().replace(/\\s+/g, " ");

  if (!cleanInput || cleanInput.length < 2) {
    return {
      studentValidation: {
        isValid: false,
        reason: "Word is too short or empty. Please enter a valid science term.",
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const isAlreadyUsed = usedWords.some((w) => {
    const norm = w.trim().toLowerCase().replace(/\\s+/g, " ");
    return norm === cleanInput;
  });

  if (isAlreadyUsed) {
    return {
      studentValidation: {
        isValid: false,
        reason: \`"\${rawInput.trim()}" was already played in this match! Try another term.\`,
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const topicWords = getOfflineWordList(topic);

  const exactTopicMatch = topicWords.find((w) => {
    const dictLower = w.word.toLowerCase();
    const cleanDictLower = dictLower.replace(/[^a-z0-9]/g, "");
    const cleanUser = cleanInput.replace(/[^a-z0-9]/g, "");
    return (
      dictLower === cleanInput ||
      cleanDictLower === cleanUser ||
      dictLower + "s" === cleanInput ||
      cleanInput + "s" === dictLower ||
      dictLower + "es" === cleanInput ||
      cleanInput + "es" === dictLower
    );
  });

  if (exactTopicMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: \`Valid term for \${topic}!\`,
        normalizedWord: exactTopicMatch.word,
        definition: exactTopicMatch.definition,
        etymology: exactTopicMatch.etymology,
        score: 20,
        matchedBingoTileId: exactTopicMatch.word.toLowerCase()
      }
    };
  }

  const partialTopicMatch = topicWords.find((w) => {
    const dictLower = w.word.toLowerCase();
    return cleanInput.includes(dictLower) || dictLower.includes(cleanInput);
  });

  if (partialTopicMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: \`Valid term for \${topic}!\`,
        normalizedWord: partialTopicMatch.word,
        definition: partialTopicMatch.definition,
        etymology: partialTopicMatch.etymology,
        score: 20,
        matchedBingoTileId: partialTopicMatch.word.toLowerCase()
      }
    };
  }

  const wrongCategoryMatch = findWordInDictionaries(rawInput);
  if (wrongCategoryMatch) {
    const topicKeywords = topic.toLowerCase().split(/[^a-z0-9]+/);
    const defLower = wrongCategoryMatch.wordInfo.definition.toLowerCase();
    const wordLower = wrongCategoryMatch.wordInfo.word.toLowerCase();
    
    const isCrossRelevant = topicKeywords.some(
      (kw) => kw.length >= 4 && (defLower.includes(kw) || wordLower.includes(kw))
    );

    if (isCrossRelevant) {
      return {
        studentValidation: {
          isValid: true,
          reason: \`Valid term for \${topic}!\`,
          normalizedWord: wrongCategoryMatch.wordInfo.word,
          definition: wrongCategoryMatch.wordInfo.definition,
          etymology: wrongCategoryMatch.wordInfo.etymology,
          score: 20,
          matchedBingoTileId: wrongCategoryMatch.wordInfo.word.toLowerCase()
        }
      };
    }

    const wrongCatName = CATEGORY_DISPLAY_NAMES[wrongCategoryMatch.categoryKey] || wrongCategoryMatch.categoryKey;
    return {
      studentValidation: {
        isValid: false,
        reason: \`❌ "\${wrongCategoryMatch.wordInfo.word}" belongs to \${wrongCatName}, NOT \${topic}! Please enter a term directly related to \${topic}.\`,
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const generalMatch = GENERAL_SCIENCE_WORDS.find((w) => w.word.toLowerCase() === cleanInput);
  if (generalMatch) {
    if (topic.toLowerCase().includes("general")) {
      return {
        studentValidation: {
          isValid: true,
          reason: "Valid general science term!",
          normalizedWord: generalMatch.word,
          definition: generalMatch.definition,
          etymology: generalMatch.etymology,
          score: 20,
          matchedBingoTileId: generalMatch.word.toLowerCase()
        }
      };
    } else {
      return {
        studentValidation: {
          isValid: false,
          reason: \`❌ "\${generalMatch.word}" is a generic process term, not a specific concept for \${topic}. Please enter a term directly related to \${topic}.\`,
          normalizedWord: rawInput.trim(),
          definition: "",
          etymology: "",
          score: 0
        }
      };
    }
  }

  const isPresetTopic = Object.keys(CATEGORY_DISPLAY_NAMES).some((catKey) => {
    const catName = CATEGORY_DISPLAY_NAMES[catKey].toLowerCase();
    const topicLower = topic.toLowerCase();
    return catName.includes(topicLower) || topicLower.includes(catKey.replace("-", " "));
  });

  if (!isPresetTopic && cleanInput.length >= 3 && /^[a-z\\s\\-]+$/i.test(cleanInput)) {
    const formattedWord = rawInput
      .trim()
      .split(/\\s+/)
      .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
      .join(" ");

    return {
      studentValidation: {
        isValid: true,
        reason: \`Valid term for custom topic "\${topic}"!\`,
        normalizedWord: formattedWord,
        definition: \`Scientific concept relating to \${topic}.\`,
        etymology: \`Derived from scientific root terminology in \${topic}.\`,
        score: 20,
        matchedBingoTileId: cleanInput.replace(/\\s+/g, "-")
      }
    };
  }

  const sampleTerms = topicWords.slice(0, 4).map((w) => w.word).join(", ");
  return {
    studentValidation: {
      isValid: false,
      reason: \`❌ "\${rawInput.trim()}" was not recognized for topic "\${topic}". Try terms like: \${sampleTerms || "key scientific terms"}.\`,
      normalizedWord: rawInput.trim(),
      definition: "",
      etymology: "",
      score: 0
    }
  };
}

export function getAiTurnOffline(topic: string, usedWords: string[]) {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\\s+/g, " "));

  const available = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (available.length > 0) {
    const chosen = available[Math.floor(Math.random() * available.length)];
    return {
      word: chosen.word,
      definition: chosen.definition,
      etymology: chosen.etymology,
      funFact: chosen.funFact,
      score: 20,
      matchedBingoTileId: chosen.word.toLowerCase()
    };
  }

  const availableGeneral = GENERAL_SCIENCE_WORDS.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));
  if (availableGeneral.length > 0) {
    const chosen = availableGeneral[Math.floor(Math.random() * availableGeneral.length)];
    return {
      word: chosen.word,
      definition: chosen.definition,
      etymology: chosen.etymology,
      funFact: chosen.funFact,
      score: 20,
      matchedBingoTileId: chosen.word.toLowerCase()
    };
  }

  return {
    word: "Bioenergetics",
    definition: "Study of energy flow and transformation within living biological systems.",
    etymology: "From Greek 'bios' (life) + 'energeia' (activity/work).",
    funFact: "Bioenergetics governs metabolic rates and cellular respiration efficiency.",
    score: 20,
    matchedBingoTileId: "bioenergetics"
  };
}

export function generateBingoTilesOffline(topic: string) {
  const wordList = getOfflineWordList(topic);
  let pool = [...wordList];
  if (pool.length < 25) {
    pool = [...pool, ...GENERAL_SCIENCE_WORDS];
  }
  
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  
  const tiles = [];
  for (let i = 0; i < 25; i++) {
    const item = shuffled[i % shuffled.length];
    tiles.push({
      id: \`tile-\${i + 1}\`,
      label: item.word,
      targetTermOrCategory: item.word,
      description: item.definition
    });
  }
  return tiles;
}

export function getOfflineHint(topic: string, usedWords: string[]): string {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\\s+/g, " "));
  const unused = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (unused.length > 0) {
    const word = unused[Math.floor(Math.random() * unused.length)];
    return \`Hint: Think about a term starting with '\${word.word.charAt(0)}' related to: \${word.definition}\`;
  }

  return \`Hint: Enter terms related to key scientific concepts in \${topic}.\`;
}
`;

  const finalContent = header + newDictCode + displayNamesCode + helperFunctionsCode;
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log(`Successfully updated ${filePath}`);
}

updateFile(path.join(__dirname, '../src/data/scienceDictionary.ts'));
updateFile(path.join(__dirname, '../server/scienceDictionary.ts'));
