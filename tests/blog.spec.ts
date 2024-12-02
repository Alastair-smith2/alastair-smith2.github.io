import { test, expect } from "./axe-test";
import {
  BLOG_POST_HEADING_LEVEL,
  EXPECTED_BLOG_POST_COUNT,
  HOME_URL,
} from "./constants";

test("can navigate to entry from posts list", async ({
  page,
  makeAxeBuilder,
}) => {
  await page.goto(`${HOME_URL}/posts`);

  await expect(page).toHaveTitle(/Posts/);

  const title = page.getByRole("heading", { name: "Blog posts" });
  await expect(title).toBeVisible();

  const blogPostHeadings = page.getByRole("heading", BLOG_POST_HEADING_LEVEL);
  await expect(blogPostHeadings).toHaveCount(EXPECTED_BLOG_POST_COUNT);

  const dataEngineering = page.getByText("Learning about data engineering");
  await expect(dataEngineering).toBeVisible();

  const pressure = page.getByText("Thinking about pressure");
  await expect(pressure).toBeVisible();

  const pressureTag = page.getByRole("link", { name: "Reflections" });
  await expect(pressureTag).toBeVisible();

  const cryptopals = page.getByText("Cryptopals");
  await expect(cryptopals).toBeVisible();

  const majorVersionUpgrades = page.getByText("Major version upgrades");
  await expect(majorVersionUpgrades).toBeVisible();
  
  await majorVersionUpgrades.click();
  await expect(page).toHaveTitle(/Major version upgrades/);
  const blogTitle = page.getByRole("heading", { name: "Major version upgrades: Dreaming of what could be normal" });
  await expect(blogTitle).toBeVisible();
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
