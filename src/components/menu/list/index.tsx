import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import MenuLink from "../link";

interface MenuProps {
  items: ContentMenu[];
}
export default component$<MenuProps>((props) => {
  return (
    <ul class="md:basis-1/3 flex flex-row">
      {props.items.map((item) => (
        <MenuLink item={item} />
      ))}
    </ul>
  );
});
