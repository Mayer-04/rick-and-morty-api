import type { Result } from "../types/results";

export const randomCharacter = (results: Result[], length: number) => {
  const random = Math.floor(Math.random() * length);
  return results[random];
};
