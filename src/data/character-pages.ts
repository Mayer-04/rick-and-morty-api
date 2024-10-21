import type { Result, RickAndMorty } from "../types/results";

export const fetchCharacterPage = async (
  pageNumber: number
): Promise<Result[]> => {
  try {
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    const response = await fetch(url);
    const data: RickAndMorty = await response.json();
    const { results } = data;
    return results;
  } catch (error) {
    throw new Error("Failed to fetch character page", { cause: error });
  }
};
