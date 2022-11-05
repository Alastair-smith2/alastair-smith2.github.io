import { component$, useStore } from "@builder.io/qwik";
import { ContentMenu, Link } from "@builder.io/qwik-city";

export default component$(() => {
  const items: ContentMenu[] = [
    { href: "https://twitter.com/alastair_smith2", text: "Twitter" },
    { href: "https://github.com/Alastair-smith2", text: "Github" },
    {
      href: "https://www.linkedin.com/in/alastair-smith-8b1819134/",
      text: "LinkedIn",
    },
  ];

  const dateInformation = useStore({ date: new Date().getFullYear() });
  return (
    <footer class="p-6 flex flex-col md:flex-row md:justify-between">
      <p class="md:basis-1/3">
        2022 {dateInformation.date > 2022 ? `- ${dateInformation.date}` : null}
      </p>
      <ul class="md:basis-1/3 flex flex-row">
        {items.map((item) => (
          <li class="basis-1/4 md:basis-1/3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              class="text-sky-500 hover:text-sky-600"
              href={item.href}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
});
