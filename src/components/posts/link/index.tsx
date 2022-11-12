import { component$ } from "@builder.io/qwik";
import Link from "../../internal-link";

export default component$(
  (props: { post: { href?: string; text?: string } }) => {
    return (
      <li>
        <Link text={props.post.text} href={props.post.href} />
      </li>
    );
  }
);
