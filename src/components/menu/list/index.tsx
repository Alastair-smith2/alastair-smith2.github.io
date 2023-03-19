import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuLink, { Style } from "../link";

interface MenuProps {
  items: ContentMenu[];
  style?: Style;
}
export default component$<MenuProps>((props) => {
  return (
    <ul class="mt-3 sm:mt-0 sm:basis-1/2 md:basis-1/3 flex flex-row sm:justify-between">
      {props.items.map((item) => (
        <MenuLink key={item.text} style={props.style ?? "link"} item={item} />
      ))}
    </ul>
  );
});
