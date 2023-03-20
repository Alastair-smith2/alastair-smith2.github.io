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
        class={`grid ${
          showSingleCol ? "sm:grid-cols-1" : "sm:grid-cols-2"
        } gap-8`}
      >
        {props.item.items?.map((post) => (
          <PostLink key={post.text} post={post} />
        ))}
      </ul>
    </>
  );
});
