import { State } from "./State";
export class History {
  private listState: State[] = [];
  addStae(state: State) {
    this.listState.push(state);
  }
  getCurentState() {
    return this.listState[0];
  }
  getPrev() {
    return this.listState.pop();
  }
}
