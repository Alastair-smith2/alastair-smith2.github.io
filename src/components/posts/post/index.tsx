import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="prose max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-p:text-lg prose-p:text-white prose-a:text-emerald-300 hover:prose-a:text-emerald-700 prose-li:text-white prose-strong:text-emerald-500">
      <Slot />
    </article>
  );
});

export const ArticleLink = component$(
  ({ href, text }: { href: string; text?: string }) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {text ? text : href}
      </a>
    );
  }
);
