import { test, expect } from "vitest";
import { onStaticGenerate } from "./index";

test("It should generate relevant tags for static site", async () => {
  const tags = await onStaticGenerate({
    env: {
      get: (key: string) => key,
    },
  });
  expect(tags).toEqual({
    params: [
      { tag: "react-native" },
      { tag: "feature-flags" },
      { tag: "cryptography" },
      { tag: "blog" },
      { tag: "technology" },
      { tag: "reflections" },
      { tag: "data-engineering" },
    ],
  });
});
