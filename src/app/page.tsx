import About from "@/components/About";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main
      className="mx-auto min-h-full w-[95%] space-y-10 
    rounded-xl border p-4 text-center text-3xl"
    >
      <About />
      <Menu />
    </main>
  );
}
