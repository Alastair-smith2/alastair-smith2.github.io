import { component$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import PostSection from "~/components/posts/section";
import { TAGS_INDEX } from "~/constants";

export default component$(() => {
  const { menu } = useContent();
  const {
    params: { tag },
  } = useLocation();

  const posts = menu?.items?.filter((item) => {
    const tags = item.text
      .split(":")
      ?.[TAGS_INDEX].toLowerCase()
      .trim()
      .split(", ");
    return tags.includes(tag.toLowerCase());
  });

  return (
    <div>
      <h2 class="text-3xl text-slate-200">Relevant posts</h2>
      <PostSection
        mostRecentItemsOnly={false}
        item={{ items: posts, text: "" }}
        showDrafts={false}
      />
    </div>
  );
});
