import type { Results } from "../types/results";

export const getCount = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data, HTTP status: ${response.status}`);
    }
    const results: Results = await response.json();
    const { info } = results;
    const { count } = info;
    return count;
  } catch (error) {
    throw error;
  }
};
