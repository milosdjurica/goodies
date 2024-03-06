import About from "@/components/About";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="text-center text-3xl space-y-10 w-[70%] m-auto border-white border h-full min-h-full">
      <h1>Goodies</h1>
      <About />
      <Menu />
    </main>
  );
}
