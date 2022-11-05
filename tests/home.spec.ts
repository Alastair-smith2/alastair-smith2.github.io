import { test, expect } from "@playwright/test";

test("homepage has title and header links", async ({ page }) => {
  await page.goto("http://localhost:4173");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Alastair Smith's blog/);

  const aboutLink = page.getByRole("link", { name: "About" });
  const postsLink = page.getByRole("link", { name: "Posts" });
  const homeLink = page.getByRole("link", { name: "Home" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(homeLink).toHaveAttribute("href", "/");
  await expect(postsLink).toHaveAttribute("href", "/posts");
  await expect(aboutLink).toHaveAttribute("href", "/about");
});
