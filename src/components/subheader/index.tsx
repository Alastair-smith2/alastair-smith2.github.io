import { component$ } from "@builder.io/qwik";

export interface SubHeaderProps {
  text: string;
}

export default component$<SubHeaderProps>((props) => {
  return <h3 class="mt-6 text-xl text-emerald-500">{props.text}</h3>;
});
