import { component$ } from "@builder.io/qwik";
import type { StaticGenerateHandler } from "@builder.io/qwik-city";
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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  // example of loading params for this use case
  // every implementation will be different
  const tags = [
    "react-native",
    "feature-flags",
    "cryptography",
    "blog",
    "technology",
  ];

  return {
    params: tags.map((tag) => ({ tag })),
  };
};
