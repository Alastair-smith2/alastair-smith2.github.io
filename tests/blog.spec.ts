import { test, expect } from "./axe-test";
import { HOME_URL } from "./constants";

test("can navigate to entry from posts list", async ({
  page,
  makeAxeBuilder,
}) => {
  await page.goto(`${HOME_URL}/posts`);

  await expect(page).toHaveTitle(/Posts/);

  const title = page.getByRole("heading", { name: "Blog posts" });
  await expect(title).toBeVisible();

  const blogPostHeadings = page.getByRole("heading", { level: 4 });
  await expect(blogPostHeadings).toHaveCount(3);

  const cryptopals = page.getByText("Cryptopals");
  await expect(cryptopals).toBeVisible();

  const majorVersionUpgrades = page.getByText("Major version upgrades");
  await expect(majorVersionUpgrades).toBeVisible();

  const entry = page.getByText("New blog");
  await entry.click();
  await expect(page).toHaveTitle(/New blog/);
  const blogTitle = page.getByRole("heading", { name: "So why a blog?" });
  await expect(blogTitle).toBeVisible();
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
