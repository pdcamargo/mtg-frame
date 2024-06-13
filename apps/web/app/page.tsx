"use client";

import Image from "next/image";

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
 * Function that will convert a string of text into images with the correct mana symbols
 *
 * E.g: {u}{u}{u} -> <img src="/img/manaSymbols/u.svg" /> <img src="/img/manaSymbols/u.svg" /> <img src="/img/manaSymbols/u.svg" />
 */
function textToManaSymbols(text: string) {
  const regex = /{[0-9a-z]+}/g;
  const matches = text.match(regex);
  if (matches) {
    return matches.map((match) => {
      return (
        <Image
          className="inline-block"
          width={50}
          height={50}
          src={`${textToMana[match as keyof typeof textToMana]}`}
          alt="Mana Symbol"
        />
      );
    });
  }
  return text;
}

/**
 * Similar to textToManaSymbols, but this function will return the mana symbols as HTML image strings and it will keep the text in between the mana symbols
 */
function textToManaSymbolsString(text: string) {
  const regex = /{[0-9a-z]+}/g;
  const matches = text.match(regex);
  const splitText = text.split(regex);

  if (matches) {
    let result = "";
    for (let i = 0; i < splitText.length; i++) {
      result += splitText[i];
      if (matches[i]) {
        result += `<img class="inline-block" width="40" height="40" src="${textToMana[matches[i] as keyof typeof textToMana]}" alt="Mana Symbol"/>`;
      }
    }
    return result;
  }
  return text;
}

const Home: React.FC = () => {
  const cost = "{u}{u}{b}";

  const cardDescription =
    "{x} Você convence até {x} pessoas a fazer o que você quiser, não importa se a pessoa precisa morrer, matar a família ou dançar pelado.";

  const manaSymbols = textToManaSymbols(cost);

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-700 p-5">
      <div
        style={{
          zoom: 0.3,
        }}
      >
        <div className="card --phyrexian2">
          <div
            className="card-art-holder"
            style={{
              backgroundImage:
                "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2d47e99-12d5-48cf-930e-2d87634b17db/dg6soxp-39c2d5c2-b051-41cf-b7f6-4af8023f1bce.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyZDQ3ZTk5LTEyZDUtNDhjZi05MzBlLTJkODc2MzRiMTdkYlwvZGc2c294cC0zOWMyZDVjMi1iMDUxLTQxY2YtYjdmNi00YWY4MDIzZjFiY2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o51l3D13bftC4wLLC2DcJB8Fln-s82B4rt34D8q2VJk)",
            }}
          />
          <div
            className="card-frame"
            style={{
              backgroundImage: `url(${frames.m15.white})`,
              backgroundPosition: "center, top",
              backgroundSize: "cover, contain",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            <div className="card-header">
              <span className="card-name">Naruto da Casa Uzumaki</span>

              <div className="card-mana-cost">{manaSymbols}</div>
            </div>

            <div className="card-art"></div>
            <div className="card-type">
              <span>Creature</span>

              <img
                src={setSymbols.sldR}
                alt="Set Symbol"
                className="set-symbol"
              />
            </div>

            <div className="card-info">
              <span
                className="card-info-description"
                dangerouslySetInnerHTML={{
                  __html: textToManaSymbolsString(cardDescription),
                }}
              />
              <span className="card-info-flavor">
                Você não contava com meu talk no jutsu!!
              </span>
              <div
                className="card-info-pt"
                style={{
                  backgroundImage: `url(${frames.m15.pt.white})`,
                }}
              >
                <span className="card-info-pt-text">10 / 20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
