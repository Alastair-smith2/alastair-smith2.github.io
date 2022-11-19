import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import PostLink from "../link";

export default component$((props: { item: ContentMenu }) => {
  const showSingleCol = (props.item.items?.length ?? 0) <= 1;
  return (
    <>
      <h3 class="mt-6 text-xl text-emerald-700">{props.item.text}</h3>
      <ul
        class={`grid sm:grid-cols-${showSingleCol ? "1" : "2"} sm:grid-rows-${
          showSingleCol ? "1" : "2"
        } gap-4 grid-cols-1 grid-rows-1`}
      >
        {props.item.items?.map((post) => (
          <PostLink post={post} />
        ))}
      </ul>
    </>
  );
});
