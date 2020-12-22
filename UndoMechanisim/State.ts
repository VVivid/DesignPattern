export class State {
  private content: string;
  constructor(content: string) {
    this.setState(content);
  }
  setState(content: string) {
    this.content = content;
    return;
  }
}
