class SortingController {
  constructor(delayInMs, arrayCallback, highlightCallback, swapCallback) {
    this.delayInMs = delayInMs;
    this.arrayCallback = arrayCallback;
    this.highlightCallback = highlightCallback;
    this.highlight = [];
    this.swapCallback = swapCallback;
    this.swap = [];
  }
  render(arr) {
    this.arrayCallback([...arr]);
    this.highlightCallback(this.highlight);
    this.swapCallback(this.swap);
    this.highlight = [];
    this.swap = [];
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, this.delayInMs));
  }
  setHighlight(value) {
    this.highlight[value] = true;
  }
  setSwap(value) {
    this.swap[value] = true;
  }
}

export default SortingController;