import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  (props: { post: { href?: string; text?: string } }) => {
    const content = props.post.text?.split(":");
    const tags = content?.[3];
    return (
      <li>
        <Link
          href={props.post.href}
          class="
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 block mt-6 p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700"
        >
          <h3 class="mb-4 text-2xl font-bold tracking-tight text-white">
            {content?.[0]}
          </h3>
          <h4 class="font-normal text-xl text-white mb-4">{content?.[1]}</h4>
          <p class="text-emerald-500 font-bold">{content?.[2]}</p>
          {tags && (
            <ul class="flex gap-2 flex-wrap mt-4">
              {tags.split(", ").map((tag) => (
                <p
                  class="text-white mb-2 border-solid border-2 rounded-full p-2 border-white"
                  key={tag}
                >
                  {tag}
                </p>
              ))}
            </ul>
          )}
        </Link>
      </li>
    );
  }
);
