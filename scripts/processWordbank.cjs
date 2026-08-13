const fs = require('fs');
const path = require('path');

const wordbank = JSON.parse(fs.readFileSync(path.join(__dirname, '../user_wordbank.json'), 'utf8'));

const topicMap = {
  "Characteristics and Classification of Living Organisms": "characteristics-classification",
  "Organisation of the Organism": "organisation-organism",
  "Movement into and out of Cells": "cell-movement",
  "Biological Molecules": "biological-molecules",
  "Enzymes": "enzymes",
  "Plant Nutrition": "plant-nutrition",
  "Human Nutrition": "human-nutrition",
  "Transport in Plants": "transport-plants",
  "Transport in Animals": "transport-animals",
  "Diseases and Immunity": "diseases-immunity",
  "Gas Exchange in Humans": "gas-exchange",
  "Respiration": "respiration",
  "Excretion in Humans": "excretion-humans",
  "Coordination and Response": "coordination-response",
  "Drugs": "drugs-medicine",
  "Reproduction": "reproduction",
  "Inheritance": "inheritance",
  "Variation and Selection": "variation-selection",
  "Organisms and Their Environment": "organisms-environment",
  "Human Influences on Ecosystems": "human-ecosystem-influence",
  "Biotechnology and Genetic Modification": "biotechnology-genetic-mod",
  "Advanced / University-Level Extension Terms": "advanced-extension"
};

// Helper to generate a contextual dictionary entry for any biological term
function createDictionaryEntry(word, topicName) {
  const w = word.trim();
  const lower = w.toLowerCase();

  let def = `Biological term in ${topicName} related to cellular processes and structure.`;
  let etym = `Derived from biological Latin/Greek terminology for ${w}.`;
  let fact = `Essential vocabulary item in ${topicName} syllabus.`;
  let score = 15;

  if (lower.includes('dna') || lower.includes('rna') || lower.includes('gene') || lower.includes('allele') || lower.includes('chromosome')) {
    def = `Genetic structure or sequence responsible for hereditary information and protein synthesis.`;
    etym = `From Greek/Latin roots designating genetic coding units.`;
    fact = `Fundamental concept in molecular genetics and inheritance.`;
    score = 20;
  } else if (lower.includes('cell') || lower.includes('membrane') || lower.includes('wall')) {
    def = `Microscopic biological structure forming part of cellular architecture.`;
    etym = `From Latin 'cella' (small chamber) or 'membrana'.`;
    fact = `Basic unit of structure and function in living organisms.`;
    score = 10;
  } else if (lower.includes('enzyme') || lower.includes('ase') || lower.includes('catalyst')) {
    def = `Biological catalyst protein that speeds up specific metabolic chemical reactions.`;
    etym = `From Greek 'en' (in) + 'zyme' (leaven/yeast).`;
    fact = `Lowers activation energy required for biochemical pathways without being consumed.`;
    score = 20;
  } else if (lower.includes('hormone') || lower.includes('receptor') || lower.includes('signal')) {
    def = `Chemical messenger or receiving protein regulating physiological responses.`;
    etym = `From Greek 'hormao' (to set in motion / impel).`;
    fact = `Travels through blood or tissue fluid to target organs.`;
    score = 15;
  } else if (lower.includes('cycle') || lower.includes('pathway') || lower.includes('reaction')) {
    def = `Series of interconnected chemical reactions or environmental flows in biological systems.`;
    etym = `From Greek 'kyklos' (circle or wheel).`;
    fact = `Maintains metabolic energy flow or biogeochemical recycling.`;
    score = 20;
  } else if (lower.includes('acid') || lower.includes('protein') || lower.includes('lipid') || lower.includes('saccharide')) {
    def = `Key biological molecule essential for structure, energy storage, or catalysis.`;
    etym = `Biochemical naming convention for organic macromolecules.`;
    fact = `Formed by joining monomers together via condensation reactions.`;
    score = 15;
  } else if (lower.includes('bacteria') || lower.includes('virus') || lower.includes('pathogen') || lower.includes('fungi')) {
    def = `Microorganism or infectious agent capable of causing disease or ecological decomposition.`;
    etym = `Microbiological taxon or medical pathogen designation.`;
    fact = `Plays critical roles in ecosystems, immunity, biotechnology, or disease.`;
    score = 15;
  } else {
    def = `Key biological term in ${topicName} describing a structure, process, or organism classification.`;
    etym = `Scientific terminology standard in IGCSE Biology syllabus.`;
    fact = `High-yield key terminology for biology examinations and assessments.`;
    score = 15;
  }

  return { word: w, definition: def, etymology: etym, funFact: fact, score };
}

// Read current scienceDictionary.ts to preserve existing custom definitions
const existingPath = path.join(__dirname, '../src/data/scienceDictionary.ts');
const existingContent = fs.readFileSync(existingPath, 'utf8');

const dictMatch = existingContent.match(/export const SCIENCE_DICTIONARIES[\s\S]*?=\s*(\{[\s\S]*?\});\n\nexport const CATEGORY_DISPLAY_NAMES/);

const existingDicts = {};
if (dictMatch) {
  try {
    // Evaluate or parse the existing dictionary
    const dictCode = "return " + dictMatch[1];
    const parsedFn = new Function(dictCode);
    const parsed = parsedFn();
    Object.assign(existingDicts, parsed);
    console.log("Successfully loaded existing terms from scienceDictionary.ts");
  } catch (err) {
    console.warn("Could not evaluate existing dicts:", err.message);
  }
}

const mergedDicts = {};

// Process every topic in the JSON
for (const [jsonTopicName, data] of Object.entries(wordbank)) {
  const topicKey = topicMap[jsonTopicName];
  if (!topicKey) continue;

  mergedDicts[topicKey] = [];
  const existingList = existingDicts[topicKey] || [];
  const existingMap = new Map();

  // Add existing detailed entries
  for (const item of existingList) {
    existingMap.set(item.word.toLowerCase(), item);
    mergedDicts[topicKey].push(item);
  }

  // Add user wordbank terms
  for (const term of data.terms) {
    const cleanTerm = term.trim();
    if (!existingMap.has(cleanTerm.toLowerCase())) {
      const entry = createDictionaryEntry(cleanTerm, jsonTopicName);
      mergedDicts[topicKey].push(entry);
      existingMap.set(cleanTerm.toLowerCase(), entry);
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'merged_data.json'), JSON.stringify(mergedDicts, null, 2));
console.log("Updated merged_data.json successfully");
