import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h2 class="text-white text-3xl">
        Hey, I'm Alastair, software engineer based in the UK
      </h2>
      <p class="text-white text-lg mt-6">
        Programming wise, some of the items I find most interesting are:
      </p>
      <ul class="mt-2 list-disc list-inside">
        <li class="text-white">Rust</li>
        <li class="text-white">
          Other "challenger" languages (e.g. Go / Kotlin / WebAssembly)
        </li>
        <li class="text-white">
          Social dynamics around software engineering (e.g. benefits of pair
          programming / trunk based development to mention a couple)
        </li>
        <li class="text-white">Programming paradigms (FP / OO)</li>
        <li class="text-white">
          How various technologies are advancing (e.g. hydration / resumability
          / islands in the frontend world)
        </li>
        <li class="text-white">Distributed systems</li>
      </ul>
      <p class="text-white text-lg mt-6">
        Non programming wise, things I enjoy:
      </p>
      <ul class="mt-2 list-disc list-inside">
        <li class="text-white">Games (board / video)</li>
        <li class="text-white">Football (AKA soccer)</li>
        <li class="text-white">Cooking</li>
        <li class="text-white">Walking</li>
        <li class="text-white">Animals</li>
        <li class="text-white">Spending time with family / friends</li>
      </ul>
      <p class="text-white text-lg mt-6">
        If you're interested in reaching out, either Twitter (at the moment,
        that may change) or LinkedIn are probably best. See footer links.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
};
