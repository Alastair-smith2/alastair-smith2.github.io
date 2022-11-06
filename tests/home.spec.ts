import { test, expect } from "@playwright/test";

const HOME_URL = "http://localhost:4173";
test("homepage has title and navigation links", async ({ page }) => {
  await page.goto(HOME_URL);

  await expect(page).toHaveTitle(/Alastair Smith's blog/);

  const aboutLink = page.getByRole("link", { name: "About" });
  const postsLink = page.getByRole("link", { name: "Posts" });
  const homeLink = page.getByRole("link", { name: "Home" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(homeLink).toHaveAttribute("href", "/");
  await expect(postsLink).toHaveAttribute("href", "/posts");
  await expect(aboutLink).toHaveAttribute("href", "/about");

  const twitterLink = page.getByRole("link", { name: "Twitter" });
  const linkedInLink = page.getByRole("link", { name: "LinkedIn" });
  const githubLink = page.getByRole("link", { name: "Github" });

  await expect(twitterLink).toHaveAttribute(
    "href",
    "https://twitter.com/alastair_smith2"
  );
  await expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/Alastair-smith2"
  );
  await expect(linkedInLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/alastair-smith-8b1819134"
  );
});
