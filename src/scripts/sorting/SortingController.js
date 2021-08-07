class SortingController {
  constructor(delayInMs, arrayCallback, statusCallback) {
    this.delayInMs = delayInMs;
    this.arrayCallback = arrayCallback;
    this.statusCallback = statusCallback;
    this.statuses = [];
  }
  render(arr) {
    this.arrayCallback([...arr]);
    this.statusCallback(this.statuses);
    this.statuses = [];
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, this.delayInMs));
  }
  setStatus(index, value) {
    this.statuses[index] = value;
  }
}

export default SortingController;