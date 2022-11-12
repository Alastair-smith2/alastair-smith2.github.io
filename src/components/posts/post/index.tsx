import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="prose prose-headings:underline prose-a:text-sky-500 hover:prose-a:text-sky-600">
      <Slot />
    </article>
  );
});
