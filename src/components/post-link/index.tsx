import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  (props: { post: { href?: string; text?: string } }) => {
    return (
      <li>
        <Link class="text-sky-500 hover:text-sky-600" href={props.post.href}>
          {props.post.text}
        </Link>
      </li>
    );
  }
);
