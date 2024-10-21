import type { RickAndMorty } from "../types/results";

export const getCount = async (url: string): Promise<number> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch count, HTTP status: ${response.status}`);
    }
    const results: RickAndMorty = await response.json();
    const { info } = results;
    const { count } = info;
    return count;
  } catch (error) {
    throw error;
  }
};
