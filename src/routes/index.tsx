import { component$ } from "@builder.io/qwik";
import { DocumentHead, useContent, Link } from "@builder.io/qwik-city";
import PostSection from "~/components/post-section";

export default component$(() => {
  const { menu } = useContent();
  return (
    <div class="mx-auto max-w-3xl">
      <p class="text-slate-600 mb-1">
        Hey, I'm{" "}
        <Link class="text-sky-500 hover:text-sky-600" href="/about">
          Alastair
        </Link>
        , a software engineer based in the UK with a preference around business
        logic. This blog will mainly be about technology but may occasionally
        stray into other areas.
      </p>
      <h2 class="text-3xl text-slate-600 mt-8">Recent blogs posts</h2>
      {menu && <PostSection item={menu} />}
      <p class="mt-8">
        <Link class="text-sky-500 hover:text-sky-600" href="/posts">
          See all posts
        </Link>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Alastair Smith's blog",
};
