export const fakeArray = Array.from({ length: 10 }, (_, index) => index + 1);
export const episodesString = (epistring: string): string => {
  const string = epistring.split("-");
  const stringX = string.slice(0, string.length - 1);
  const convertedString = [...stringX, 1119].join().replaceAll(",", "-");

  return convertedString;
};
