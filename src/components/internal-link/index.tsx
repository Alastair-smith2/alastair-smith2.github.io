import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$((props: { href?: string; text?: string }) => {
  return (
    <Link
      class="text-emerald-300 hover:text-emerald-700 underline"
      href={props.href}
    >
      {props.text}
    </Link>
  );
});
