import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mx-auto max-w-3xl">
      <h2 class="text-3xl text-white">Oops, there's nothing here</h2>
      <p class="text-white text-lg mt-6">
        Looks like that page doesn't exist 😢.
      </p>
      <p class="text-white text-lg mt-6">
        If you think it should,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-emerald-500 hover:text-emerald-300"
          href="https://twitter.com/alastair_smith2"
        >
          please reach out to me.
        </a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Oops, there's nothing here",
  meta: [
    {
      name: "description",
      content: "Looks like that page doesn't exist",
    },
  ],
};
