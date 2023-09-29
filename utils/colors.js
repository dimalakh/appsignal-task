import colors from "tailwindcss/colors";

export const getColorsArr = () =>
  Object.values(
    (({ green, blue, cyan, red }) => ({ green, blue, cyan, red }))(colors)
  );

export const getToneByIndex = (i) => {
  const MAX_TONE = 900;
  const MIN_TONE = 100;

  const tone = MAX_TONE - i * 100;

  if (tone < MIN_TONE) {
    return MIN_TONE;
  }

  return tone;
};
