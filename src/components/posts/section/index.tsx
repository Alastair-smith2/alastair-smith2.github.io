import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import { JSX } from "@builder.io/qwik/jsx-runtime";
import Subheader from "~/components/subheader";
import PostLink from "../link";

const MOST_RECENT_ITEM_COUNT = 4;

const getRelevantPosts = (
  items: ContentMenu[],
  exlcudeDrafts: boolean
): JSX.Element[] =>
  items.reduce((acc: JSX.Element[], item): JSX.Element[] => {
    if (item.text.includes("Draft") && exlcudeDrafts) {
      return acc;
    }
    acc.push(<PostLink key={item.text} post={item} />);
    return acc;
  }, []);

export default component$(
  (props: {
    item: ContentMenu;
    mostRecentItemsOnly: boolean;
    showDrafts: boolean;
  }) => {
    const { item, mostRecentItemsOnly, showDrafts } = props;
    const items = item.items;

    if (!items || items.length == 0) {
      return (
        <>
          <Subheader text={props.item.text} />
          <p class="text-white text-lg mt-6">No posts at the moment</p>
        </>
      );
    }

    const showSingleCol = items.length <= 1;
    const allPublishedPosts = getRelevantPosts(items, !showDrafts);
    const posts = mostRecentItemsOnly
      ? allPublishedPosts.slice(0, MOST_RECENT_ITEM_COUNT)
      : allPublishedPosts;
    return (
      <>
        <Subheader text={props.item.text} />
        <ul
          class={`grid ${
            showSingleCol ? "sm:grid-cols-1" : "sm:grid-cols-2"
          } gap-8`}
        >
          {posts}
        </ul>
      </>
    );
  }
);
