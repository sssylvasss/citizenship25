export const getRandomCoordinates = () => {
  let min = 1;
  let maxX = 14;
  let maxY = 20;
  let x = Math.floor((Math.random() * (maxX - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (maxY - min + 1) + min) / 2) * 2;
  return [x, y];
};
