async function selection_sort(inputArr, RC) {
  let arr = inputArr;
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    RC.setStatus(i, "focus");
    RC.render(arr);
    await RC.delay();
    for (let j = i; j < len; j++) {
      RC.setStatus(i, "focus");
      RC.setStatus(j, "focus");
      if(minIndex !== i) RC.setStatus(minIndex, "swap");
      RC.render(arr);
      await RC.delay();
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      RC.setStatus(i, "swap");
      RC.setStatus(minIndex, "swap");
      RC.render(arr);
      await RC.delay();
    }
    RC.render(arr);
  }
  return arr;
}

module.exports = selection_sort;