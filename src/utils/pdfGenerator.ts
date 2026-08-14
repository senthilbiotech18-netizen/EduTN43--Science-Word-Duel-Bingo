import { jsPDF } from "jspdf";
import { GameStats, WordEntry } from "../types";

export function generatePdfReport(
  topic: string,
  stats: GameStats,
  wordHistory: WordEntry[],
  gameMode: string
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 15;

  // Header Colors & Title
  doc.setFillColor(37, 99, 235); // Blue 600
  doc.rect(0, 0, pageWidth, 24, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("EduTN43 SCIENCE WORD BATTLE - MATCH SCORECARD", 14, 13);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Topic: ${topic} | Mode: ${gameMode.toUpperCase()} | Fair Scoring: 20 pts/word`, 14, 19);

  // Date
  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  doc.text(`Date: ${dateStr}`, pageWidth - 14, 19, { align: "right" });

  y = 32;

  // Scoreboard Banner Box
  const isStudentWin = stats.studentScore > stats.aiScore;
  const isTie = stats.studentScore === stats.aiScore;
  const resultText = isStudentWin
    ? "VICTORY FOR STUDENT!"
    : isTie
    ? "MATCH TIED"
    : "AI CHALLENGER WINS";

  doc.setFillColor(241, 245, 249); // Slate 100
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(14, y, pageWidth - 28, 22, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text(`Match Outcome: ${resultText}`, 20, y + 8);

  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text(`Student: ${stats.studentScore} pts`, 20, y + 16);

  doc.setTextColor(79, 70, 229);
  doc.text(`AI Challenger: ${stats.aiScore} pts`, pageWidth - 20, y + 16, {
    align: "right",
  });

  y += 28;

  // Statistics Summary Table Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text("1. Vocabulary Performance Comparison", 14, y);

  y += 4;

  // Draw Stats Table
  doc.setFillColor(226, 232, 240);
  doc.rect(14, y, pageWidth - 28, 7, "F");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(51, 65, 85);
  doc.text("Metric", 18, y + 5);
  doc.text("Student", 90, y + 5);
  doc.text("AI Challenger", 140, y + 5);

  y += 7;

  const statRows = [
    [
      "Total Words Played",
      `${stats.studentWordCount}`,
      `${stats.aiWordCount}`,
    ],
    [
      "Total Characters / Letters",
      `${stats.studentTotalLetters}`,
      `${stats.aiTotalLetters}`,
    ],
    [
      "Average Word Length",
      `${
        stats.studentWordCount > 0
          ? (stats.studentTotalLetters / stats.studentWordCount).toFixed(1)
          : "0"
      } chars`,
      `${
        stats.aiWordCount > 0
          ? (stats.aiTotalLetters / stats.aiWordCount).toFixed(1)
          : "0"
      } chars`,
    ],
    [
      "Longest Scientific Term",
      stats.longestStudentWord || "N/A",
      stats.longestAiWord || "N/A",
    ],
    [
      "Match Strikes Recorded",
      `${stats.strikes} / 3 Strikes`,
      "0 Strikes",
    ],
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  statRows.forEach((row, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(14, y, pageWidth - 28, 6, "F");
    }
    doc.setTextColor(51, 65, 85);
    doc.text(row[0], 18, y + 4.5);
    doc.text(row[1], 90, y + 4.5);
    doc.text(row[2], 140, y + 4.5);
    y += 6;
  });

  y += 8;

  // Section 2: Detailed Word Log Table
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text("2. Itemized Science Vocabulary Log", 14, y);

  y += 5;

  // Table Columns Header
  doc.setFillColor(37, 99, 235);
  doc.rect(14, y, pageWidth - 28, 7, "F");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("Turn", 18, y + 5);
  doc.text("Player", 30, y + 5);
  doc.text("Word / Term", 55, y + 5);
  doc.text("Pts", 100, y + 5);
  doc.text("Definition & Fact", 115, y + 5);

  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  wordHistory.forEach((item, index) => {
    // Page overflow check
    if (y > 270) {
      doc.addPage();
      y = 15;

      // Repeat Table Header
      doc.setFillColor(37, 99, 235);
      doc.rect(14, y, pageWidth - 28, 7, "F");

      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.text("Turn", 18, y + 5);
      doc.text("Player", 30, y + 5);
      doc.text("Word / Term", 55, y + 5);
      doc.text("Pts", 100, y + 5);
      doc.text("Definition & Fact", 115, y + 5);

      y += 7;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
    }

    const isStudent = item.playedBy === "student";
    const rowHeight = item.etymology ? 13 : 10;
    if (index % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(14, y, pageWidth - 28, rowHeight, "F");
    }

    doc.setTextColor(30, 41, 59);
    doc.text(`#${item.turnNumber}`, 18, y + 5);

    doc.setFont("helvetica", "bold");
    if (isStudent) {
      doc.setTextColor(37, 99, 235);
      doc.text("Student", 30, y + 5);
    } else {
      doc.setTextColor(79, 70, 229);
      doc.text("AI Bot", 30, y + 5);
    }

    doc.setTextColor(15, 23, 42);
    doc.text(item.word, 55, y + 5);

    doc.setTextColor(180, 83, 9); // Amber
    doc.text(`+${item.score}`, 100, y + 5);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);

    // Definition & Origin
    const fullText = item.etymology
      ? `${item.definition} [Origin: ${item.etymology}]`
      : item.definition;
    const defText = doc.splitTextToSize(fullText, 75);
    doc.text(defText[0] || "", 115, y + 5);
    if (defText[1]) {
      doc.text(defText[1], 115, y + 8.5);
    }
    if (defText[2]) {
      doc.text(defText[2], 115, y + 11.5);
    }

    y += rowHeight;
  });

  // Footer Note
  y += 5;
  if (y > 275) {
    doc.addPage();
    y = 15;
  }

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Generated automatically by Science Word Battle AI. Topic: ${topic}.`,
    14,
    y
  );

  // Save PDF
  const filename = `Science_Word_Battle_${topic.replace(/\s+/g, "_")}_Scorecard.pdf`;
  doc.save(filename);
}
