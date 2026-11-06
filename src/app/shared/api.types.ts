export interface SwapiListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export function getResourceId(url: string): string {
  return new URL(url).pathname.split('/').filter(Boolean).at(-1) ?? '';
}
