export const fitInChunk = (arr, maxLength) => {
  const mainChunk = arr.slice(0, maxLength);
  const restChunk = arr.slice(maxLength, arr.length);
  const restValue = restChunk.reduce((acc, item) => acc + item.value, 0);

  return mainChunk.concat([
    {
      key: "Others",
      value: restValue,
    },
  ]);
};
