const data = [16, 21, 11, 8, 12, 22];

const merge = (leftArr, rightArr) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      result.push(leftEl);
      leftIndex++;
    } else {
      result.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...result,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let mainIndex = Math.floor(array.length / 2);
  let leftArr = array.slice(0, mainIndex);
  let rightArr = array.slice(mainIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort(data));