import type { Result, RickAndMorty } from "../types/results";

export const fetchCharacterPage = async (
  pageNumber: number
): Promise<Result[]> => {
  try {
    const URL = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    const response = await fetch(URL);
    const data: RickAndMorty = await response.json();
    const { results } = data;
    return results;
  } catch (error) {
    throw new Error(`Error fetching characters of the pages: ${error}`);
  }
};
