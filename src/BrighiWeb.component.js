import { LitElement, html, css } from "lit";
import avatar from "./assets/avatar.jpg";

export class BrighiWeb extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <img src="${avatar}" alt="Dr. Brighi" />
      <figcaption>
        <i
          >“Isn't the view beautiful? It takes my breath away. Well, it would if
          I had any.”</i
        >
        <br />- Emily the Corpse Bride
      </figcaption>
    `;
  }

  static get styles() {
    return css`
      img {
        border-radius: 8px;
        display: block;
        margin: 0 auto;
        max-width: 90dvw;
      }

      figcaption {
        text-align: center;
      }
    `;
  }
}
