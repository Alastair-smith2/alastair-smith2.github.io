import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import Subheader from "~/components/subheader";
import PostLink from "../link";

export default component$((props: { item: ContentMenu }) => {
  const showSingleCol = (props.item.items?.length ?? 0) <= 1;
  return (
    <>
      <Subheader text={props.item.text} />
      <ul
        class={`grid sm:grid-cols-${showSingleCol ? "1" : "2"} sm:grid-rows-${
          showSingleCol ? "1" : "2"
        } gap-4 grid-cols-1 grid-rows-1`}
      >
        {props.item.items?.map((post) => (
          <PostLink key={post.text} post={post} />
        ))}
      </ul>
    </>
  );
});
