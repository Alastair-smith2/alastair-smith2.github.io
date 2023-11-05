import { test, expect } from "vitest";
import { getRelevantPostsForTag } from "./tagFilter";
import type { ContentMenu } from "@builder.io/qwik-city";

const examplePostOne = {
  text: "Some title: Some description: Some date: Tag A",
  href: "some url",
};

test("It should find the relevant posts", () => {
  const testMenu: ContentMenu = {
    text: "Top level text",
    items: [examplePostOne],
  };
  expect(getRelevantPostsForTag(testMenu, "Tag-A")).toEqual([examplePostOne]);
});

test("It should find the relevant posts regardless of case", () => {
  const testMenu: ContentMenu = {
    text: "Top level text",
    items: [examplePostOne],
  };
  expect(getRelevantPostsForTag(testMenu, "tag-a")).toEqual([examplePostOne]);
});

test("It should return an empty array if there are no relevant posts", () => {
  const testMenu: ContentMenu = {
    text: "Top level text",
    items: [examplePostOne],
  };
  expect(getRelevantPostsForTag(testMenu, "Tag B")).toEqual([]);
});

test("It should return undefined if no menu is present", () => {
  expect(getRelevantPostsForTag(undefined, "Tag B")).toEqual(undefined);
});

test("It should be able to handle posts with no tags", () => {
  const postWithoutTags = {
    text: "Some title: Some description: Some date",
    href: "some url",
  };
  const testMenu: ContentMenu = {
    text: "Top level text",
    items: [postWithoutTags],
  };
  expect(getRelevantPostsForTag(testMenu, "Tag B")).toEqual([]);
});
