import type { TolTokenAction } from "./tolTokenConfig";

export type TolSentinelFraudEvaluateRequest = {
  userId: string;
  recentEarningEvents: Array<{
    action: TolTokenAction;
    points: number;
    timestamp: number;
  }>;
  /** Optional additional features from backend/trust scoring */
  extra?: Record<string, unknown>;
};

export type TolSentinelFraudEvaluateResponse = {
  flagged: boolean;
  score: number; // 0..100
  reasons: string[];
};

/**
 * Placeholder for TolSentinel AI fraud scoring.
 * Signature is designed to accept a future real API response.
 */
export async function evaluateEarningAnomaly(
  req: TolSentinelFraudEvaluateRequest,
): Promise<TolSentinelFraudEvaluateResponse> {
  // Demo heuristic:
  // - If user earns > 10,000 points within last 10 minutes, flag.
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = req.recentEarningEvents.filter(
    (e) => now - e.timestamp <= windowMs,
  );
  const sum = recent.reduce((acc, e) => acc + e.points, 0);

  if (sum > 10_000) {
    return {
      flagged: true,
      score: Math.min(95, Math.round((sum / 10_000) * 60)),
      reasons: ["earning_spike_in_window"],
    };
  }

  return {
    flagged: false,
    score: 20,
    reasons: [],
  };
}
