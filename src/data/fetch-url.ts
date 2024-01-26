import { URLS } from "../utils/urls";
import type { Results } from "../types/results";

const { characters, episodes, locations } = URLS;

export const fetchUrls = async () => {
  try {
    const responses = await Promise.all([characters, episodes, locations]);

    const counts = responses.map(async (data) => {
      const response = await fetch(data);
      const results: Results = await response.json();
      const { info } = results;
      const { count } = info;
      return count;
    });

    return counts;
  } catch (error) {
    throw error;
  }
};
