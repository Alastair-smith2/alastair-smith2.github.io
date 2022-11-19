import { component$, useStore } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuList from "../menu/list";

export default component$(() => {
  const items: ContentMenu[] = [
    { href: "https://twitter.com/alastair_smith2", text: "Twitter" },
    { href: "https://github.com/Alastair-smith2", text: "Github" },
    {
      href: "https://www.linkedin.com/in/alastair-smith-8b1819134",
      text: "LinkedIn",
    },
  ];

  const dateInformation = useStore({ date: new Date().getFullYear() });
  return (
    <footer class="p-6 flex flex-col sm:flex-row sm:justify-between row-span-1">
      <p class="sm:basis-1/3 sm:flex sm:items-center text-emerald-700 mb-6 sm:mb-0">
        2022 {dateInformation.date > 2022 ? `- ${dateInformation.date}` : null}
      </p>
      <MenuList style="button" items={items} />
    </footer>
  );
});
