export const fakeArray = Array.from({ length: 10 }, (_, index) => index + 1);
export const loadingItem = Array.from({ length: 15 }, (_, index) => {
  return {
    id: index + 1,
    year: Number(`20${index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}`),
  };
});
