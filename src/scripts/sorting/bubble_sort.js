async function bubble_sort(SC) {
  let arr = SC.array;
  let len = arr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len - 1; i++) {
      SC.setStatus(i, "focus");
      SC.render();
      await SC.delay();
      SC.setStatus(i + 1, "focus");
      SC.render();
      await SC.delay();
      SC.setStatus(i, "");
      SC.setStatus(i + 1, "");
      if (arr[i].value > arr[i + 1].value) {
        SC.swap(i, i + 1)
        SC.setStatus(i, "swap");
        SC.setStatus(i + 1, "swap");
        SC.render();
        await SC.delay();
        SC.setStatus(i, "");
        SC.setStatus(i + 1, "");
        checked = true;
      }
      SC.render();
      await SC.delay();
    }
  } while (checked);
  return arr;
}

module.exports = bubble_sort;