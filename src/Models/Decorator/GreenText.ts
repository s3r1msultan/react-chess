import { styled } from "jsx-dom";
import { BaseText } from "./BaseText";

export class GreenText extends BaseText {
  private color = "#44944A";
  getText(): string {
    return `<div style="background: ${this.color}">${this.text}</div>`;
  }
}
