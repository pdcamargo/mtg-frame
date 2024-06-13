// import fontLoader from "next/font/local";

import { getCSS } from "./card-css";
import { clsx } from "./clsx";

const joinUrl = (url: string, host: string) => {
  return `${host}${url}`;
};

// const belerenB = localFont({
//   src: "../../public/fonts/beleren-b.ttf",
//   variable: "--font-beleren-b",
// });

// const belerenBsc = localFont({
//   src: "../../public/fonts/beleren-bsc.ttf",
//   variable: "--font-beleren-bsc",
// });

// const phyrexian = localFont({
//   src: "../../public/fonts/mtg-phyrexian.ttf",
//   variable: "--font-phyrexian",
// });

const frames = {
  stainedGlass: {
    green: "/img/frames/dmu/stainedGlass/g.png",
    blue: "/img/frames/dmu/stainedGlass/u.png",
    black: "/img/frames/dmu/stainedGlass/b.png",
    red: "/img/frames/dmu/stainedGlass/r.png",
    white: "/img/frames/dmu/stainedGlass/w.png",
  },
  ixalan: {
    green: "/img/frames/ixalan/ixalanFrameG.png",
    blue: "/img/frames/ixalan/ixalanFrameU.png",
    black: "/img/frames/ixalan/ixalanFrameB.png",
    red: "/img/frames/ixalan/ixalanFrameR.png",
    white: "/img/frames/ixalan/ixalanFrameW.png",
  },
  m15: {
    green: "/img/frames/m15/ub/regular/g.png",
    blue: "/img/frames/m15/ub/regular/u.png",
    black: "/img/frames/m15/ub/regular/b.png",
    red: "/img/frames/m15/ub/regular/r.png",
    white: "/img/frames/m15/ub/regular/w.png",
    pt: {
      green: "/img/frames/m15/ub/pt/g.png",
      blue: "/img/frames/m15/ub/pt/u.png",
      black: "/img/frames/m15/ub/pt/b.png",
      red: "/img/frames/m15/ub/pt/r.png",
      white: "/img/frames/m15/ub/pt/w.png",
    },
  },
};

const setSymbols = {
  sldC: "/img/setSymbols/official/sld-c.svg",
  sldR: "/img/setSymbols/official/sld-r.svg",
};

const textToMana = {
  "{0}": "/img/manaSymbols/0.svg",
  "{1}": "/img/manaSymbols/1.svg",
  "{2}": "/img/manaSymbols/2.svg",
  "{3}": "/img/manaSymbols/3.svg",
  "{4}": "/img/manaSymbols/4.svg",
  "{5}": "/img/manaSymbols/5.svg",
  "{6}": "/img/manaSymbols/6.svg",
  "{7}": "/img/manaSymbols/7.svg",
  "{8}": "/img/manaSymbols/8.svg",
  "{9}": "/img/manaSymbols/9.svg",
  "{10}": "/img/manaSymbols/10.svg",
  "{11}": "/img/manaSymbols/11.svg",
  "{12}": "/img/manaSymbols/12.svg",
  "{13}": "/img/manaSymbols/13.svg",
  "{14}": "/img/manaSymbols/14.svg",
  "{15}": "/img/manaSymbols/15.svg",
  "{16}": "/img/manaSymbols/16.svg",
  "{17}": "/img/manaSymbols/17.svg",
  "{18}": "/img/manaSymbols/18.svg",
  "{19}": "/img/manaSymbols/19.svg",
  "{20}": "/img/manaSymbols/20.svg",
  "{u}": "/img/manaSymbols/u.svg",
  "{b}": "/img/manaSymbols/b.svg",
  "{r}": "/img/manaSymbols/r.svg",
  "{g}": "/img/manaSymbols/g.svg",
  "{w}": "/img/manaSymbols/w.svg",
  "{x}": "/img/manaSymbols/x.svg",
  "{y}": "/img/manaSymbols/y.svg",
  "{z}": "/img/manaSymbols/z.svg",
};

/**
 * Similar to textToManaSymbols, but this function will return the mana symbols as HTML image strings and it will keep the text in between the mana symbols
 */
function textToManaSymbolsString(text: string, host: string) {
  const regex = /{[0-9a-z]+}/g;
  const matches = text.match(regex);
  const splitText = text.split(regex);

  if (matches) {
    let result = "";
    for (let i = 0; i < splitText.length; i++) {
      result += splitText[i];
      if (matches[i]) {
        result += `<img style="display:inline-block;" width="40" height="40" src="${joinUrl(textToMana[matches[i] as keyof typeof textToMana], host)}" alt="Mana Symbol"/>`;
      }
    }
    return result;
  }
  return text;
}

export const getHTML = async ({
  name,
  manaCost,
  type,
  art,
  frame,
  flavor,
  description,
  pt,
  isPhyrexian = false,
  host,
}: {
  name: string;
  manaCost: string;
  type: string;
  art: string;
  frame: string;
  flavor: string;
  description: string;
  pt: string;
  isPhyrexian?: boolean;
  host: string;
}) => {
  //   const image = await fetch(art);

  //   const imageBuffer = await image.arrayBuffer();

  const base64Image = "";

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="http://localhost:3000/beleren/stylesheet.css">
        <link rel="stylesheet" href="http://localhost:3000/phyrexian/stylesheet.css">

        <style>
          :root {
            --font-beleren-b: 'Beleren2016', sans-serif;
            --font-phyrexian: 'MTG - Phyrexian';
          }

          ${getCSS({ frame, host })}

        </style>
        
        <title>New Card</title>
      </head>
      <body>
        <div class="${clsx("card", {
          "--phyrexian": isPhyrexian,
        })}">
          <div class="card-art-holder"></div>
          <div class="card-frame">
            <div class="card-header">
              <span class="card-name">${name}</span>
              <div class="card-mana-cost">${
                manaCost ? textToManaSymbolsString(manaCost, host) : ""
              }</div>
            </div>
            <div class="card-art"></div>
            <div class="card-type">
              <span>${type}</span>
            </div>
            <div class="card-info">
              <span class="card-info-description">${textToManaSymbolsString(description, host)}</span>
              <span class="card-info-flavor">${flavor}</span>
              <div class="card-info-pt">
                <span class="card-info-pt-text">${pt}</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
};
