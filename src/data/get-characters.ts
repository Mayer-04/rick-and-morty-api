import { generateRandomPage } from "../utils/random-page";
import { randomElement } from "../utils/random-character";
import type { RickAndMorty } from "../types/results";

export const getCharacters = async () => {
  const randomPage = generateRandomPage();

  const charactersPromises = randomPage.map(async (pageNumber) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}`
      );
      const data: RickAndMorty = await response.json();
      const { results } = data;
      const resultsRandom = randomElement(results, results.length);
      return resultsRandom;
    } catch (error) {
      throw new Error(`Error fetching characters: ${error}`);
    }
  });

  try {
    const characters = await Promise.all(charactersPromises);
    return characters;
  } catch (error) {
    throw error;
  }
};
