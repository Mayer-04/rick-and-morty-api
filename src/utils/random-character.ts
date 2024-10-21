import type { Result } from "../types/results";

export const getRandomCharacter = (characters: Result[], length: number) => {
  const randomIndex = Math.floor(Math.random() * length);
  return characters[randomIndex];
};
