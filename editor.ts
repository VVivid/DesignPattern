import { History } from "./history";
import { State } from "./State";
class editor {
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

const newText = new editor();
newText.createState("I want to go to school");
newText.createState("I want to go home ");
newText.undo();
newText.restore();
newText.undo();
