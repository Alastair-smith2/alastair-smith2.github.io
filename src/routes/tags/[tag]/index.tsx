import { component$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import PostSection from "~/components/posts/section";
import { getRelevantPostsForTag } from "./tagFilter";

export default component$(() => {
  const { menu } = useContent();
  const {
    params: { tag },
  } = useLocation();

  return (
    <div>
      <h2 class="text-3xl text-white">Relevant posts</h2>
      <PostSection
        mostRecentItemsOnly={false}
        item={{ items: getRelevantPostsForTag(menu, tag), text: "" }}
        showDrafts={false}
      />
    </div>
  );
});
