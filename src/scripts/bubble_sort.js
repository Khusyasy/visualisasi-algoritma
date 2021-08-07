function bubble_sort(inputArr) {
  let arr = inputArr;
  let len = arr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        checked = true;
      }
    }
  } while (checked);
  return arr;
}

module.exports = bubble_sort;