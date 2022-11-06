import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h2 class="text-slate-600 text-xl">
        Hey, I'm Alastair, software engineer based in the UK
      </h2>
      <p class="text-slate-600 mt-6">
        Programming wise, some of the items I find most interesting are:
      </p>
      <ul class="mt-2 list-disc list-inside">
        <li>Rust</li>
        <li>Other "challenger" languages (e.g. Go / Kotlin / Crystal)</li>
        <li>
          Social dynamics around software engineering (e.g. dynamics of pair
          programming / trunk based development to mention a couple)
        </li>
        <li>Programming paradigms (FP / OO)</li>
        <li>
          How various technologies are advancing (e.g. hydration / resumability
          / islands in the frontend world)
        </li>
        <li>Distributed systems</li>
      </ul>
      <p class="text-slate-600 mt-6">Non programming wise, things I enjoy:</p>
      <ul class="mt-2 list-disc list-inside">
        <li>Games (board / video)</li>
        <li>Football (AKA soccer)</li>
        <li>Cooking</li>
        <li>Walking</li>
        <li>Animals</li>
        <li>Spending time with family / friends</li>
      </ul>
      <p class="text-slate-600 mt-6">
        If you're interested in reaching out, either Twitter (at the moment,
        that may change) or LinkedIn are probably best. See footer links.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
};
