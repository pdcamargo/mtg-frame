// app/api/generate-image/route.js
import { NextRequest, NextResponse } from "next/server";

import puppeteer from "puppeteer";
import { getHTML } from "./html";

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

  // Create a new instance of the Puppeteer browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

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

  // Generate a screenshot of the page
  const screenshotBuffer = await page.screenshot();

  // Close the browser
  await browser.close();

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
