import { Http } from '../domain/http.repository';

export const httpFetch: Http = {
  get: async <T>(path: string) => {
    const response = await fetch(path);
    const data = await response.json();

    if (!response.ok) return await Promise.reject(new Error(data.message));

    return await Promise.resolve(data as T);
  },
};
