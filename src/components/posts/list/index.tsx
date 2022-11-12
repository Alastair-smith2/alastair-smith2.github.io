import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import PostSection from "../section";

export default component$(() => {
  const { menu } = useContent();
  return (
    <>
      <h2 class="text-2xl text-slate-600 mb-1">Blog posts</h2>
      {menu?.items?.map((section) => (
        <PostSection item={section} />
      ))}
    </>
  );
});
