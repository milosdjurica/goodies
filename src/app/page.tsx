import About from "@/components/About";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="mx-auto min-h-full w-[95%] space-y-10 border border-white text-center text-3xl">
      <h1>Goodies</h1>
      <About />
      <Menu />
    </main>
  );
}
