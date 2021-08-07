async function bubble_sort(inputArr, RC) {
  let arr = inputArr;
  let len = arr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      RC.setHighlight(i);
      RC.setHighlight(i + 1);
      RC.render(arr);
      await RC.delay();
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        RC.setSwap(i);
        RC.setSwap(i + 1);
        RC.render(arr);
        await RC.delay();
        checked = true;
      }
    }
  } while (checked);
  return arr;
}

module.exports = bubble_sort;