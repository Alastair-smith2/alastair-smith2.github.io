import { component$, useContext } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import { DraftPostContext } from "~/root";
import PostSection from "../section";

export default component$(() => {
  const { menu } = useContent();

  const showDraftPosts = useContext(DraftPostContext);
  return (
    <>
      <h2 class="text-3xl text-white mb-1">Blog posts</h2>
      {menu?.items?.map((section) => (
        <PostSection
          mostRecentItemsOnly={false}
          key={section.text}
          item={section}
          showDrafts={showDraftPosts.showDraftPosts}
        />
      ))}
    </>
  );
});
