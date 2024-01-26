// export const getNumberPages = async (): Promise<number> => {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character");

//     const data = await response.json();
//     const { info } = data;
//     const { pages } = info;
//     return pages;
//   } catch (error) {
//     throw error;
//   }
// };

export const generateRandomPage = (): number[] => {
  const randomPageNumbers = Array.from(
    { length: 6 },
    () => Math.floor(Math.random() * 42) + 1
  );
  return randomPageNumbers;
};
