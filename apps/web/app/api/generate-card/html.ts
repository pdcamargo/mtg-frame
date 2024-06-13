const joinUrl = (url: string) => {
  return `http://localhost:3000${url}`;
};

export const getHTML = async ({
  name,
  manaCost,
  type,
  art,
  frame,
  flavor,
  description,
  pt,
}: {
  name: string;
  manaCost: string;
  type: string;
  art: string;
  frame: string;
  flavor: string;
  description: string;
  pt: string;
}) => {
  //   const image = await fetch(art);

  //   const imageBuffer = await image.arrayBuffer();

  const base64Image = "";

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body, html {
            height: 2100px;
            width: 1500px;
            overflow: hidden;
            margin: 0;
            padding: 0;
            }

            * {
                box-sizing: border-box;
            }

            .card {
                --card-border-size: 1.45cm;
                --card-name-size: 60px;
                --card-type-size: 50px;
                --card-name-color: #000;
                --card-type-color: #000;
                --card-info-color: #000;
                --card-info-font: var(--font-beleren-b);
                --card-info-pt-font: var(--font-beleren-b);
                --card-info-flavor-font: arial;
                --card-info-font-size-min: 40px;
                --card-info-font-size-max: 50px;
                --card-info-font-size: clamp(
                    var(--card-info-font-size-min),
                    var(--card-info-font-size-max),
                    var(--card-info-font-size-max)
                );

                position: relative;
                background-size: cover;
                display: flex;
                flex-direction: column;
                gap: 0.42cm;
                width: 1500px;
                height: 2100px;
                border-radius: 12mm;
                overflow: hidden;
            }

            .card.--phyrexian {
                --card-info-font: var(--font-phyrexian);
                --card-info-flavor-font: var(--font-phyrexian);
            }

            .card {
                font-family: var(--card-info-font), sans-serif;
            }

            .card-header {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-inline: calc(var(--card-border-size) + 4mm);
                height: 105px;
                margin-top: var(--card-border-size);
            }

            .card-name {
                font-size: var(--card-name-size);
                color: var(--card-name-color);
            }

            .card-mana-cost {
                display: flex;
                gap: 0.20cm;
            }

            .card-art {
                height: 940px;
                width: calc(100% - 2 * var(--card-border-size));
                margin: 0 auto;
            }

            .card-type {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 110px;
                padding-inline: calc(var(--card-border-size) + 4mm);
                font-size: var(--card-type-size);
                color: var(--card-type-color);
            }

            .card-frame {
                position: absolute;
                inset: 0;
                background-size: cover;
                display: flex;
                flex-direction: column;
                gap: 0.42cm;
                border-radius: 12mm;
                padding: var(--card-border-size);
                background-image: url(${joinUrl(frame)});
            }

            .card-art-holder {
                border-radius: 12mm;
                inset: 0;
                position: absolute;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }

            .card-info {
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 0.425cm;
                padding-inline: calc(var(--card-border-size) + 4mm);
                padding-block: 0;
                height: 640px;
                font-size: var(--card-info-font-size);
                color: var(--card-info-color);
            }

            .card-info-flavor {
                font-size: calc(var(--card-info-font-size) * 0.9);
                font-style: italic;
                font-family: var(--card-info-flavor-font), sans-serif;
            }

            .card-info-description {
                font-size: calc(var(--card-info-font-size) * 0.9);
                font-family: var(--card-info-pt-font), sans-serif;
            }

            .card-info-pt {
                position: absolute;
                background-size: cover;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 274px;
                height: 140px;
                bottom: calc(var(--card-border-size) * -1);
                right: var(--card-border-size);
            }

            .card-info-pt-text {
                padding-left: 0.52cm;
                font-weight: bold;
                font-family: var(--card-info-pt-font), sans-serif;
            }

        </style>
        
        <title>New Card</title>
      </head>
      <body>
        <div class="card">
          <div class="card-art-holder"></div>
          <div class="card-frame">
            <div class="card-header">
              <span class="card-name">${name}</span>
              <div class="card-mana-cost">${manaCost}</div>
            </div>
            <div class="card-art"></div>
            <div class="card-type">
              <span>${type}</span>
            </div>
            <div class="card-info">
              <span class="card-info-description">${description}</span>
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
