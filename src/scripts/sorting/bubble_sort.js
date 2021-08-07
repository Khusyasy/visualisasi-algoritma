async function bubble_sort(inputArr, RC) {
  let arr = inputArr;
  let len = arr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len - 1; i++) {
      RC.setStatus(i, "focus");
      RC.render(arr);
      await RC.delay();
      RC.setStatus(i, "focus");
      RC.setStatus(i + 1, "focus");
      RC.render(arr);
      await RC.delay();
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        RC.setStatus(i, "swap");
        RC.setStatus(i + 1, "swap");
        RC.render(arr);
        await RC.delay();
        checked = true;
      }
    }
    RC.render(arr);
  } while (checked);
  return arr;
}

module.exports = bubble_sort;