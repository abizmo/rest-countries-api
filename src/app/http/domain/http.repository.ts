export interface Http {
  get: <T>(path: string) => Promise<T | any>;
}
