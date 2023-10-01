import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Subheader from "~/components/subheader";

export default component$(() => {
  return (
    <>
      <h2 class="text-slate-200 text-3xl">
        I'm Alastair, a software engineer based in the UK and currently working
        as a Tech Lead
      </h2>
      <Subheader
        text={
          "Programming-wise, some of the items I find most interesting are:"
        }
      />
      <ul class="mt-2 list-disc list-inside">
        <li class="text-slate-200">The Rust language</li>
        <li class="text-slate-200">
          Other "challenger" languages (e.g. Go / Kotlin / WebAssembly)
        </li>
        <li class="text-slate-200">
          Social dynamics around software engineering (e.g. benefits of pair
          programming and trunk based development to mention a couple)
        </li>
        <li class="text-slate-200">Programming paradigms (FP / OO)</li>
        <li class="text-slate-200">
          How various technologies are advancing (e.g. hydration, resumability
          and islands in the frontend world)
        </li>
        <li class="text-slate-200">Distributed systems</li>
        <li class="text-slate-200">Security</li>
      </ul>
      <Subheader text={"Non programming-wise, things I enjoy:"} />
      <ul class="mt-2 list-disc list-inside">
        <li class="text-slate-200">
          Board games and video games (have loved Ori and the Will of the Wisps
          recently)
        </li>
        <li class="text-slate-200">Playing football (AKA soccer)</li>
        <li class="text-slate-200">
          Cooking delicious food from around the world
        </li>
        <li class="text-slate-200">Walking in the hills near where I live</li>
        <li class="text-slate-200">Animals (especially cats!)</li>
        <li class="text-slate-200">Spending time with family and friends</li>
      </ul>
      <p class="text-slate-200 text-lg mt-6">
        If you're interested in reaching out, either Twitter (at the moment,
        that may change) or LinkedIn are probably best. See footer links.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "About page containing information about Alastair",
    },
  ],
};
