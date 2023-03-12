import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuList from "../menu/list";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const items: ContentMenu[] = [
    { href: "/", text: "Home" },
    { href: "/posts", text: "Posts" },
    { href: "/about", text: "About" },
  ];
  return (
    <header class="flex flex-col sm:flex-row sm:justify-between p-6 sm:mb-5 lg:mb-6 row-end-1">
      <div class="sm:basis-1/3">
        <Link href="/">
          <h1 class="text-3xl text-emerald-500 hover:text-emerald-300">
            Alastair Smith
          </h1>
        </Link>
      </div>
      <MenuList items={items} />
    </header>
  );
});
