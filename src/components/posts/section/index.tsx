import { component$ } from "@builder.io/qwik";
import type { ContentMenu } from "@builder.io/qwik-city";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
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
    item: ContentMenu | undefined;
    mostRecentItemsOnly: boolean;
    showDrafts: boolean;
  }) => {
    const { item, mostRecentItemsOnly, showDrafts } = props;
    if (!item || !item.items || item.items.length == 0) {
      return <p class="text-slate-200 text-lg mt-6">No posts at the moment</p>;
    }

    const allPublishedPosts = getRelevantPosts(item.items, !showDrafts);
    const posts = mostRecentItemsOnly
      ? allPublishedPosts.slice(0, MOST_RECENT_ITEM_COUNT)
      : allPublishedPosts;
    return <ul>{posts}</ul>;
  }
);
