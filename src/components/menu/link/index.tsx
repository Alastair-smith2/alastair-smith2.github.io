import { component$ } from "@builder.io/qwik";
import { ContentMenu, Link } from "@builder.io/qwik-city";

interface MenuLinkProp {
  item: ContentMenu;
}

export default component$<MenuLinkProp>((props) => {
  return (
    <li class="basis-1/4 md:basis-1/3">
      <Link
        target={props.item.href?.includes("https") ? "_blank" : undefined}
        rel="noopener noreferrer"
        class="text-sky-500 hover:text-sky-600"
        href={props.item.href}
      >
        {props.item.text}
      </Link>
    </li>
  );
});
