/**
 * Public surface of the opportunity-scoring subsystem.
 */

export { runScoringPipeline } from './pipeline.js';
export type { RunScoringOptions, RunScoringResult } from './pipeline.js';
export { buildCandidates, synthesizeTargetKeyword } from './candidate-builder.js';
export { scoreCandidate } from './score.js';
export type { Candidate, ScoredCandidate, ScoreBreakdown } from './types.js';
export { classifyIntent } from './intent.js';
export {
  normalizeVolume,
  normalizePayingCapacity,
  normalizeCompetitionGap,
} from './normalize.js';
