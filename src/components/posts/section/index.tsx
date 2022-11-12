import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import PostLink from "../link";

export default component$((props: { item: ContentMenu }) => {
  return (
    <>
      <h3 class="mt-6 text-xl text-slate-700">{props.item.text}</h3>
      <ul>
        {props.item.items?.map((post) => (
          <PostLink post={post} />
        ))}
      </ul>
    </>
  );
});
