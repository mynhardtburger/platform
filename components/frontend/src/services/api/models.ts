/**
 * Models API service
 * Handles model listing API calls
 */

import { apiClient } from './client';
import type { ListModelsResponse } from '@/types/api';

export const DEFAULT_MODEL_ID = "claude-sonnet-4-5" as const;

/**
 * Get available models for a project (workspace-aware, checks overrides).
 * Optionally filter by provider (e.g. "anthropic", "google").
 */
export async function getModelsForProject(projectName: string, provider?: string): Promise<ListModelsResponse> {
  const params = provider ? `?provider=${encodeURIComponent(provider)}` : '';
  return apiClient.get<ListModelsResponse>(`/projects/${projectName}/models${params}`);
}
