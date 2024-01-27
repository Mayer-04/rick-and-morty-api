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
export const generateUniqueRandomPage = () => {
  const uniquePageNumbers = new Set();
  while (uniquePageNumbers.size < 6) {
    const randomPage = Math.floor(Math.random() * 42) + 1;
    uniquePageNumbers.add(randomPage);
  }
  return Array.from(uniquePageNumbers);
};
