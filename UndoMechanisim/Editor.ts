import { History } from "./History";
import { State } from "./State";
export class editor {
  prevState: State;
  history = new History();
  createState(content: string) {
    this.history.addStae(new State(content));
  }
  undo() {
    this.prevState = this.history.getPrev();
    console.log(this.history.getCurentState());
    return this.history.getCurentState();
  }
  restore() {
    this.history.addStae(this.prevState);
    console.log(this.prevState);
    return this.prevState;
  }
}
