import { test, expect } from "./axe-test";
import {
  BLOG_POST_HEADING_LEVEL,
  EXPECTED_HOME_PAGE_BLOG_POST_COUNT,
  HOME_URL,
} from "./constants";

test("homepage has title and navigation links", async ({
  page,
  makeAxeBuilder,
}) => {
  await page.goto(HOME_URL);

  await expect(page).toHaveTitle(/Alastair Smith's blog/);

  const aboutLink = page.getByRole("link", { name: "About", exact: true });
  const postsLink = page.getByRole("link", { name: "Posts", exact: true });
  const homeLink = page.getByRole("link", { name: "Home" });

  await expect(homeLink).toHaveAttribute("href", "/");
  await expect(postsLink).toHaveAttribute("href", "/posts/");
  await expect(aboutLink).toHaveAttribute("href", "/about/");

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

  const blogPostHeadings = page.getByRole("heading", BLOG_POST_HEADING_LEVEL);
  await expect(blogPostHeadings).toHaveCount(
    EXPECTED_HOME_PAGE_BLOG_POST_COUNT
  );

  const accessibilityScanResults = await makeAxeBuilder().analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
