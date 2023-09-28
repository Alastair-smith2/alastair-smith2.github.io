import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class="bg-slate-900 min-h-screen grid gap-2 grid-cols-1 grid-rows-3">
      <Header />
      <main class="row-span-3">
        <section class="max-w-4xl mx-auto p-6">
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
