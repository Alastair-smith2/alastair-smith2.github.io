import { component$ } from "@builder.io/qwik";
import { DocumentHead, useContent } from "@builder.io/qwik-city";
import PostSection from "~/components/posts/section";
import Link from "~/components/internal-link";

export default component$(() => {
  const { menu } = useContent();
  return (
    <div class="mx-auto max-w-3xl">
      <p class="text-slate-600 mb-1">
        Hey, I'm <Link href="/about" text="Alastair" />, a software engineer
        based in the UK. This blog will mainly be about programming but will
        occasionally venture into other spheres.
      </p>
      <h2 class="text-3xl text-slate-600 mt-8">Recent blogs posts</h2>
      {menu && <PostSection item={menu} />}
      <div class="mt-8">
        <Link text="See all posts" href="/posts" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Alastair Smith's blog",
};
