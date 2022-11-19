import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$((props: { href?: string; text?: string }) => {
  return (
    <Link class="hover:text-emerald-300 text-emerald-700" href={props.href}>
      {props.text}
    </Link>
  );
});
