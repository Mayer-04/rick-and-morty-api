import { generateUniqueRandomPage } from "../utils/random-page";
import { getRandomCharacter } from "../utils/random-character";
import { fetchCharacterPage } from "./character-pages";
import type { Result } from "../types/results";

export const getCharacters = async (): Promise<Result[]> => {
  const uniquePage = generateUniqueRandomPage();

  const characterPromises = uniquePage.map(async (page) => {
    try {
      const results = await fetchCharacterPage(page);
      return getRandomCharacter(results, results.length);
    } catch (error) {
      throw error;
    }
  });

  try {
    const characters = await Promise.all(characterPromises);
    return characters;
  } catch (error) {
    throw error;
  }
};
