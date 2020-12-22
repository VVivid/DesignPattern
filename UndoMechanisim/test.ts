import { editor } from "./Editor";

const newText = new editor();
newText.createState("I want to go to school");
newText.createState("I want to go home ");
newText.undo();
newText.restore();
newText.undo();
