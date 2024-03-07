import About from "@/components/About";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main
      className="mx-auto min-h-full w-[95%] space-y-10 
    rounded-xl border border-white p-4 text-center text-3xl"
    >
      <h1 className="text-7xl">Goodies</h1>
      <About />
      <Menu />
    </main>
  );
}
