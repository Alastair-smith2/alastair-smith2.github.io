import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$((props: { href?: string; text?: string }) => {
  return (
    <Link class="text-sky-500 hover:text-sky-600" href={props.href}>
      {props.text}
    </Link>
  );
});
