import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import PostList from "~/components/post-list";

export default component$(() => <PostList />);

export const head: DocumentHead = {
  title: "Posts",
};
