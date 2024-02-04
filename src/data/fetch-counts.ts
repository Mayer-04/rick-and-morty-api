import { URLS } from "../utils/urls";
import { getCount } from "./get-count";
import type { Counts } from "../types/counts";

const { characters, episodes, locations } = URLS;

export const fetchCounts = async (): Promise<Counts> => {
  try {
    const [charactersCount, episodesCount, locationsCount] = await Promise.all([
      getCount(characters),
      getCount(episodes),
      getCount(locations),
    ]);

    return {
      characters: charactersCount,
      episodes: episodesCount,
      locations: locationsCount,
    };
  } catch (error) {
    throw new Error("Error fetching counts", { cause: error });
  }
};
