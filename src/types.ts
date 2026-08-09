export type GameMode = 'turn-duel' | 'bingo-battle' | 'timed-blitz';

export interface WordEntry {
  id: string;
  word: string;
  playedBy: 'student' | 'ai';
  turnNumber: number;
  definition: string;
  etymology?: string;
  funFact?: string;
  isValid: boolean;
  score: number;
  category?: string;
  timestamp: number;
  matchedBingoTileId?: string;
}

export interface BingoTile {
  id: string;
  label: string;
  targetTermOrCategory: string;
  description: string;
  claimedBy: 'student' | 'ai' | null;
  claimedWord?: string;
}

export interface Topic {
  id: string;
  name: string;
  iconName: string;
  description: string;
  category: string;
  sampleWords: string[];
}

export interface GameStats {
  studentScore: number;
  aiScore: number;
  studentWordCount: number;
  aiWordCount: number;
  studentTotalLetters: number;
  aiTotalLetters: number;
  studentBingos: number;
  aiBingos: number;
  totalTurns: number;
  longestStudentWord: string;
  longestAiWord: string;
  streak: number;
  strikes: number;
}

export interface ValidateAndRespondRequest {
  topic: string;
  studentWord: string;
  usedWords: string[];
  bingoTiles?: { id: string; label: string }[];
}

export interface ValidateAndRespondResponse {
  studentValidation: {
    isValid: boolean;
    reason?: string;
    normalizedWord: string;
    definition: string;
    etymology?: string;
    score: number;
    matchedBingoTileId?: string;
  };
  aiTurn?: {
    word: string;
    definition: string;
    etymology?: string;
    funFact?: string;
    score: number;
    matchedBingoTileId?: string;
  };
}

export interface TopicSuggestionResponse {
  topics: {
    name: string;
    description: string;
    sampleWords: string[];
  }[];
}
