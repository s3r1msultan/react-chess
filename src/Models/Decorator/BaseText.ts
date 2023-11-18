import { JsxElement } from "typescript";

export class BaseText {
  protected text: string | undefined;
  constructor(text: string | undefined) {
    this.text = text;
  }

  getText(): string {
    return `<div>${this.text}</div>`;
  }
}
