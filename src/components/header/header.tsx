import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuList from "../menu/list";

export default component$(() => {
  const items: ContentMenu[] = [
    { href: "/", text: "Home" },
    { href: "/posts", text: "Posts" },
    { href: "/about", text: "About" },
  ];
  return (
    <header class="flex flex-col md:flex-row md:justify-between p-6 md:mb-5 lg:mb-6">
      <div class="md:basis-1/3">
        <h1 class="text-3xl text-slate-500">Alastair Smith</h1>
      </div>
      <MenuList items={items} />
    </header>
  );
});
