class SortingController {
  constructor(delayInMs, array, setArray) {
    this.delayInMs = delayInMs;
    this.array = array;
    this.setArray = setArray;
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, this.delayInMs));
  }
  render() {
    this.setArray([...this.array]);
  }
  swap(indexA, indexB) {
    [this.array[indexA], this.array[indexB]] = [this.array[indexB], this.array[indexA]];
  }
  setStatus(index, value) {
    this.array[index].status = value;
  }
}

export default SortingController;