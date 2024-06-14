import puppeteer, { Page } from "puppeteer";

// VERCEL_ENV can't exist to be dev

const isDev = !process.env.VERCEL_ENV;

const getOptions = async () => {};

let _page: Page | null = null;

export const getPage = async () => {
  const browser = await puppeteer.launch();
  _page = await browser.newPage();

  return _page;
};
