import { test, expect } from "@playwright/test";
import { HOME_URL } from "./constants";

test("can navigate to entry from posts list", async ({ page }) => {
  await page.goto(`${HOME_URL}/posts`);

  await expect(page).toHaveTitle(/Posts/);

  const title = page.getByRole("heading", { name: "Blog posts" });
  await expect(title).toBeVisible();

  const entry = page.getByText("New blog");
  await entry.click();
  await expect(page).toHaveTitle(/New blog/);
  const blogTitle = page.getByRole("heading", { name: "So why a blog?" });
  await expect(blogTitle).toBeVisible();
});
