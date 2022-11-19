import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  (props: { post: { href?: string; text?: string } }) => {
    const content = props.post.text?.split(":");
    return (
      <li>
        <Link
          href={props.post.href}
          class="
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 block mt-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {content?.[0]}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {content?.[1]}
          </p>
        </Link>
      </li>
    );
  }
);
