// Shared types for the AI Visibility Checker. Mirror of the subset of the SIS
// scan result JSON that the FactoryJet report renders. Kept local (SIS is a
// separate repo) — the partner API contract in the design spec is the source
// of truth for this shape.

export type EngineId = 'chatgpt' | 'google_aio' | 'perplexity';

/** Human labels for the answer engines (SIS emits these ids in `progress`). */
export const ENGINE_LABELS: Record<string, string> = {
  chatgpt: 'ChatGPT',
  google_aio: 'Google AI Overviews',
  perplexity: 'Perplexity',
  gemini: 'Gemini',
  claude: 'Claude',
  google_ai_mode: 'Google AI Mode',
};

/** The three engines the free scan always runs, in display order. */
export const FREE_ENGINES: EngineId[] = ['chatgpt', 'google_aio', 'perplexity'];

export interface SubScores {
  presence: number;
  prominence: number;
  competitive: number;
  citations: number;
  sentiment: number;
}

export interface Competitor {
  name: string;
  mentions: number;
  isYou: boolean;
}

export interface QuestionRow {
  ordinal: number;
  text: string;
  answer: string;
  mentioned: boolean;
  rank: number | null;
  sentiment: string | null;
}

export interface FindingRow {
  ordinal: number;
  title: string;
  detail: string;
  impact: string;
  effort: string;
}

export interface Citation {
  domain?: string;
  url?: string;
  title?: string;
}

export interface ScanResult {
  slug: string;
  status: string;
  progress?: Record<string, string> | null;
  error?: string | null;
  score?: number;
  grade?: string;
  subScores?: SubScores;
  engineScores?: Record<string, { score?: number } & Partial<SubScores>>;
  competitors?: Competitor[];
  citations?: Citation[];
  meta?: { category?: string; siteTitle?: string; enginesRun?: string[]; questionCount?: number } | null;
  enginesRun?: string[];
  completedAt?: string;
  questions?: QuestionRow[];
  findings?: FindingRow[];
}
