import type { Result } from "../types/results";

export const randomElement = (results: Result[], length: number) => {
  const random = Math.floor(Math.random() * length) + 1;
  return results[random];
};
