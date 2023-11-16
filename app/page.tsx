import { ChooseUs } from "./components/ChooseUs";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";


export default function Home({searchParams}: {searchParams: {[key: string]: any}}) {
  const page = searchParams.page ?? 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      <Explore page={+page} />
      <ChooseUs />
      {/* Deliberately left the other part */}
      <Footer />
    </main>
  );
}
