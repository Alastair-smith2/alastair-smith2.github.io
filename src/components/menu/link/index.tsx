import { component$ } from "@builder.io/qwik";
import { ContentMenu, Link, useLocation } from "@builder.io/qwik-city";

export type Style = "button" | "link";

interface MenuLinkProp {
  item: ContentMenu;
  style: Style;
}

export default component$<MenuLinkProp>((props) => {
  const { url } = useLocation();
  return (
    <li
      class={`sm:flex sm:justify-center basis-1/4 sm:basis-1/3 items-center ${
        props.style === "button" &&
        "transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
      }`}
    >
      <Link
        target={props.item.href?.includes("https") ? "_blank" : undefined}
        rel="noopener noreferrer"
        class={`hover:text-emerald-700 text-white p-2
        ${props.item.href == url.pathname && "underline underline-offset-1"} 
        ${
          props.style === "button" &&
          "rounded-full bg-emerald-700 hover:bg-white"
        } `}
        href={props.item.href}
      >
        {props.item.text}
      </Link>
    </li>
  );
});
