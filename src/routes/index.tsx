import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useContent } from "@builder.io/qwik-city";
import PostSection from "~/components/posts/section";
import Link from "~/components/internal-link";
import { DraftPostContext } from "~/root";

export default component$(() => {
  const { menu } = useContent();
  const { showDraftPosts } = useContext(DraftPostContext);

  return (
    <div class="mx-auto max-w-4xl">
      <h2 class="text-3xl text-white">Welcome</h2>
      <p class="text-white text-lg mt-6">
        Hey, I'm <Link href="/about" text="Alastair" />. This blog will mainly
        be about programming but will occasionally venture into other spheres.
      </p>
      <h2 class="text-3xl text-white mt-6">Recent blogs posts</h2>
      {menu?.items && (
        <>
          <PostSection
            mostRecentItemsOnly={false}
            item={menu}
            showDrafts={showDraftPosts}
          />
          <div class="mt-6">
            <Link text="See all posts" href="/posts" />
          </div>
        </>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Alastair Smith's blog",
  meta: [
    {
      name: "description",
      content: "Alastair Smith's blog home page",
    },
  ],
};
