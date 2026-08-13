const fs = require('fs');
const path = require('path');

const mergedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'merged_data.json'), 'utf8'));

// Helper to sanitize strings for TS file
function escapeStr(str) {
  if (!str) return '""';
  return JSON.stringify(str);
}

// Function to update a scienceDictionary.ts file
function updateFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Extract CATEGORY_DISPLAY_NAMES, findWordInDictionaries, and studentValidation functions if present
  // We want to update the SCIENCE_DICTIONARIES object cleanly in place or regenerate the entire file structure.

  // Let's inspect what lines exist in src/data/scienceDictionary.ts after SCIENCE_DICTIONARIES
  const dictStartIndex = fileContent.indexOf("export const SCIENCE_DICTIONARIES");
  const helperStartIndex = fileContent.indexOf("export const CATEGORY_DISPLAY_NAMES");

  let header = fileContent.substring(0, dictStartIndex);
  let footer = fileContent.substring(helperStartIndex);

  // Build the new SCIENCE_DICTIONARIES ts code
  let newDictCode = "export const SCIENCE_DICTIONARIES: Record<string, OfflineWordInfo[]> = {\n";

  const topicsKeys = Object.keys(mergedData);
  topicsKeys.forEach((key, keyIdx) => {
    newDictCode += `  ${JSON.stringify(key)}: [\n`;
    const terms = mergedData[key];
    terms.forEach((t, termIdx) => {
      const comma = termIdx === terms.length - 1 ? "" : ",";
      newDictCode += `    { word: ${escapeStr(t.word)}, definition: ${escapeStr(t.definition)}, etymology: ${escapeStr(t.etymology)}, funFact: ${escapeStr(t.funFact)}, score: ${t.score || 15} }${comma}\n`;
    });
    const keyComma = keyIdx === topicsKeys.length - 1 ? "" : ",";
    newDictCode += `  ]${keyComma}\n`;
  });
  newDictCode += "};\n\n";

  const finalContent = header + newDictCode + footer;
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log(`Successfully updated ${filePath}`);
}

updateFile(path.join(__dirname, '../src/data/scienceDictionary.ts'));
updateFile(path.join(__dirname, '../server/scienceDictionary.ts'));
