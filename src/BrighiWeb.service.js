import { maoMao } from "./assets/b64assets.js";
import { corpseBride } from "./assets/b64assets.js";

class BrighiWebServiceClass {
  #posts;
  constructor() {
    this.#posts = [
      {
        imageData: maoMao,
        caption: {
          author: "MaoMao",
          text: "I can't recite poetry or play the erhu.",
        },
      },
      {
        imageData: corpseBride,
        caption: {
          author: "Emily the Corpse Bride",
          text: "Isn't the view beautiful? It takes my breath away. Well, it would if I had any.",
        },
      },
    ];
  }
  resolvePosts() {
    return this.#posts;
  }
}

export const BrighiWebService = new BrighiWebServiceClass();
