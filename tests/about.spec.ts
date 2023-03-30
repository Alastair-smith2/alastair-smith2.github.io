import { test, expect } from "./axe-test";
import { HOME_URL } from "./constants";

test("about page", async ({ page, makeAxeBuilder }) => {
  await page.goto(`${HOME_URL}/about`);

  await expect(page).toHaveTitle(/About/);

  const programmingInterests = page.getByRole("heading", {
    level: 3,
    name: "Programming-wise, some of the items I find most interesting are:",
    exact: true,
  });
  await expect(programmingInterests).toHaveCount(1);

  const hobbyInterests = page.getByRole("heading", {
    level: 3,
    name: "Non programming-wise, things I enjoy:",
    exact: true,
  });
  await expect(hobbyInterests).toHaveCount(1);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
