import type { ContentMenu } from "@builder.io/qwik-city";
import { TAGS_INDEX } from "~/constants";

export const getRelevantPostsForTag = (
  menu: ContentMenu | undefined,
  tag: string
) => {
  return menu?.items?.filter((item) => {
    const potentialTags: string | undefined =
      item.text.split(":")?.[TAGS_INDEX];
    if (!potentialTags) {
      return false;
    }

    // TODO: refactor this + the post link logic separately so they can't get out of sync
    const tags = potentialTags
      .toLowerCase()
      .trim()
      .split(", ")
      .map((tag) => tag.replace(" ", "-"));
    return tags.includes(tag.toLowerCase());
  });
};
