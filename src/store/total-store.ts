import { makeAutoObservable } from "mobx";

class TotalStore {
  total = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment(value: number) {
    this.total += value;
  }
}

const totalStore = new TotalStore();
export default totalStore;