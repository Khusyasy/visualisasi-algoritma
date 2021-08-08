async function selection_sort(RC) {
  let arr = RC.array;
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    RC.setStatus(i, "focus");
    RC.render();
    await RC.delay();
    RC.setStatus(i, "");
    for (let j = i; j < len; j++) {
      if (arr[minIndex].value > arr[j].value) {
        minIndex = j;
      }
      RC.setStatus(i, "focus");
      RC.setStatus(j, "focus");
      if(minIndex !== i) RC.setStatus(minIndex, "select");
      RC.render();
      await RC.delay();
      RC.setStatus(i, "");
      RC.setStatus(j, "");
      RC.setStatus(minIndex, "");
    }
    if (i !== minIndex) {
      RC.swap(i, minIndex);
      RC.setStatus(i, "swap");
      RC.setStatus(minIndex, "swap");
      RC.render();
      await RC.delay();
      RC.setStatus(i, "");
      RC.setStatus(minIndex, "");
    }
    RC.render();
    await RC.delay();
  }
  return arr;
}

module.exports = selection_sort;