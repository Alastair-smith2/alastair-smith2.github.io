import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuLink, { Style } from "../link";

interface MenuProps {
  items: ContentMenu[];
  style?: Style;
}
export default component$<MenuProps>((props) => {
  return (
    <ul class="sm:basis-1/2 flex flex-row sm:justify-between">
      {props.items.map((item) => (
        <MenuLink style={props.style ?? "link"} item={item} />
      ))}
    </ul>
  );
});
