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
    const tags = potentialTags.toLowerCase().trim().split(", ");
    return tags.includes(tag.toLowerCase());
  });
};
