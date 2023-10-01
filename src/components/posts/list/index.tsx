import { component$, useContext } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import { DraftPostContext } from "~/root";
import PostSection from "../section";

export default component$(() => {
  const { menu } = useContent();

  const showDraftPosts = useContext(DraftPostContext);
  return (
    <>
      <h2 class="text-3xl text-slate-200 mb-1">Blog posts</h2>
      <PostSection
        mostRecentItemsOnly={false}
        item={menu}
        showDrafts={showDraftPosts.showDraftPosts}
      />
    </>
  );
});
