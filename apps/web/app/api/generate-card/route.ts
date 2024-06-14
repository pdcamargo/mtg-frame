// app/api/generate-image/route.js
import { NextRequest, NextResponse } from "next/server";

import { getHTML } from "./html";
import { getPage } from "./get-browse";

export async function GET(request: NextRequest) {
  // Parse the request URL to get the query parameters
  const { searchParams, origin } = new URL(request.url);

  const host = origin;

  const name = searchParams.get("name") || "";
  const manaCost = searchParams.get("manaCost") || "";
  const type = searchParams.get("type") || "";
  const art = searchParams.get("art") || "";
  const flavor = searchParams.get("flavor") || "";
  const description = searchParams.get("description") || "";
  const pt = searchParams.get("pt") || "";
  const frame = searchParams.get("frame") || "";
  const isPhyrexian = searchParams.get("isPhyrexian") === "true";

  const page = await getPage();

  await page.setViewport({
    width: 1500,
    height: 2100,
    deviceScaleFactor: 2,
  });

  // Define your HTML content here
  const htmlContent = await getHTML({
    name,
    manaCost,
    type,
    art,
    flavor,
    description,
    pt,
    frame,
    isPhyrexian,
    host,
  });

  // Set the content of the page
  await page.setContent(htmlContent);

  // wait for all 3rd party scripts to load
  await page.waitForSelector("img");

  // Generate a screenshot of the page
  const screenshotBuffer = await page.screenshot();

  // Close the browser
  await page.close();

  // Create a response with the image buffer
  return new NextResponse(screenshotBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": 'inline; filename="generated-image.png"',
    },
  });

  // html
  return new NextResponse(htmlContent, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
