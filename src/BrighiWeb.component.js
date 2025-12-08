import { LitElement, html, css } from "lit";
import { BrighiWebService } from "./BrighiWeb.service.js";
import { ImagePost } from "./components/ImagePost.component.js";

export class BrighiWeb extends LitElement {
  static get properties() {
    return { posts: { Array } };
  }

  constructor() {
    super();
    this.posts = BrighiWebService.resolvePosts();
  }

  render() {
    return html`
      <h1>💀Dr. Brighi</h1>
      <hr />
      ${this.posts?.map(
        ({ imageData, caption }) =>
          html`<brighi-image-post
              class="post"
              .imageData="${imageData}"
              .caption="${caption}"
            ></brighi-image-post>
            <hr />`,
      )}
    `;
  }

  static get styles() {
    return css`
      .post {
        margin: 1rem;
      }
    `;
  }
}
