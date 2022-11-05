import { component$ } from "@builder.io/qwik";
import { ContentMenu, Link } from "@builder.io/qwik-city";

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
      <ul class="md:basis-1/3 flex flex-row">
        {items.map((item) => (
          <li class="basis-1/4 md:basis-1/3">
            <Link class="text-sky-500 hover:text-sky-600" href={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
});
