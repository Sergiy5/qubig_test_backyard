import { WhatIsBackyard } from "@/components/whatIsBackyard/WhatIsBackyard";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow justify-center items-center w-screen">
      <Hero />
      <WhatIsBackyard />
    </main>
  );
}
