import { component$ } from "@builder.io/qwik";
import { ContentMenu } from "@builder.io/qwik-city";
import { JSX } from "@builder.io/qwik/jsx-runtime";
import Subheader from "~/components/subheader";
import PostLink from "../link";

const MOST_RECENT_ITEM_COUNT = 3;

const getRelevantPosts = (
  items: ContentMenu[],
  exludeDraftPosts: boolean
): JSX.Element[] =>
  items.reduce((acc: JSX.Element[], item): JSX.Element[] => {
    if (exludeDraftPosts && item.text.includes("Draft")) {
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
    const minimumPosts = items.slice(0, MOST_RECENT_ITEM_COUNT);
    const posts = mostRecentItemsOnly
      ? getRelevantPosts(minimumPosts, !showDrafts)
      : getRelevantPosts(items, !showDrafts);
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
