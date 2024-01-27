import { generateUniqueRandomPage } from "../utils/random-page";
import { randomCharacter } from "../utils/random-character";
import { fetchCharacterPage } from "./character-pages";

export const getCharacters = async () => {
  const uniquePage = generateUniqueRandomPage();

  const characterPromises = uniquePage.map(async (page) => {
    try {
      const results = await fetchCharacterPage(page);
      return randomCharacter(results, results.length);
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
