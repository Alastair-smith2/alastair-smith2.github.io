import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class="bg-gray-50 shadow-xl min-h-screen grid gap-2 grid-cols-1 grid-rows-1">
      <main>
        <Header />
        <section class="max-w-3xl mx-auto p-6">
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
