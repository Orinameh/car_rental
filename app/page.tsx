import Hero from "./components/Hero";
import car from "@/public/assets/car.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Image
        width={800}
        className="absolute top-[28rem] -left-8"
        src={car}
        alt="car"
      />
    </main>
  );
}
