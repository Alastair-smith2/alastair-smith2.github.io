import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { TAGS_INDEX } from "~/constants";

export default component$(
  (props: { post: { href?: string; text?: string } }) => {
    const content = props.post.text?.split(":");
    const tags = content?.[TAGS_INDEX];
    return (
      <li>
        <div
          class="
          block mt-6 p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700"
        >
          <h3>
            <Link
              href={props.post.href}
              class="block underline hover:text-emerald-700 mb-4 text-2xl font-semibold tracking-tight text-white"
            >
              {content?.[0]}
            </Link>
          </h3>
          <h4 class="font-normal text-white mb-4">{content?.[1]}</h4>
          <p class="text-emerald-500">{content?.[2]}</p>
          {tags && (
            <ul class="flex gap-2 flex-wrap mt-4">
              {tags.split(", ").map((tag) => (
                <li
                  class="text-white hover:bg-emerald-700 hover:underline mb-2 border-solid border rounded-full text-sm p-2 leading-3 border-gray"
                  key={tag}
                >
                  <Link href={`/tags/${tag.trim()}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    );
  }
);
