// export const generateUniqueRandomPage = (): number[] => {
//   const randomPageNumbers = Array.from(
//     { length: 6 },
//     () => Math.floor(Math.random() * 42) + 1
//   );
//   const uniquePageNumbers = [...new Set<number>(randomPageNumbers)];
//   return uniquePageNumbers;
// };
export const generateUniqueRandomPage = (): number[] => {
  const uniquePageNumbers = new Set<number>();
  while (uniquePageNumbers.size < 6) {
    const randomPage = Math.floor(Math.random() * 42) + 1;
    uniquePageNumbers.add(randomPage);
  }
  return Array.from(uniquePageNumbers);
};
