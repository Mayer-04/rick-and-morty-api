// export const generateUniqueRandomPage = (): number[] => {
//   const randomPageNumbers = Array.from(
//     { length: 6 },
//     () => Math.floor(Math.random() * 42) + 1
//   );
//   const uniquePageNumbers = [...new Set<number>(randomPageNumbers)];
//   return uniquePageNumbers;
// };

export const generateUniqueRandomPage = (): number[] => {
  const pageNumbers = new Set<number>();
  while (pageNumbers.size < 6) {
    const pageNumber = Math.floor(Math.random() * 42) + 1;
    pageNumbers.add(pageNumber);
  }
  return Array.from(pageNumbers);
};
