import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import PostList from "~/components/posts/list";

export default component$(() => <PostList />);

export const head: DocumentHead = {
  title: "Posts",
  meta: [
    {
      name: "description",
      content: "List of posts by date",
    },
  ],
};
