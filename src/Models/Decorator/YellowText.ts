import { styled } from "jsx-dom";
import { BaseText } from "./BaseText";

export class YellowText extends BaseText {
  private color = "#F4A900";
  getText(): string {
    return `<div style="background: ${this.color}">${this.text}</div>`;
  }
}
