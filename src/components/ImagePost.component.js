import { LitElement, html, css } from "lit";

export class ImagePost extends LitElement {
  static get properties() {
    return {
      imageData: { String },
      caption: { Object },
    };
  }

  constructor() {
    super();
    this.imageData = "";
    this.caption = { author: "unknown", text: "" };
  }

  render() {
    return html`
      <img
        src="${this.imageData}"
        alt="${this.caption.author} image"
        heigth="600"
        width="401"
      />
      <figcaption>
        <i>“${this.caption.text}”</i>
        <br />- ${this.caption.author}
      </figcaption>
    `;
  }

  static get styles() {
    return css`
      img {
        border-radius: 8px;
        margin: 0 auto;
        display: block;
        max-width: 90dvw;
      }
      figcaption {
        text-align: center;
      }
    `;
  }
}

window.customElements.define("brighi-image-post", ImagePost);
