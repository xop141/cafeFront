"use client";
import SearchBar from "@/components/layout/SearchBar";
import Header from "@/components/layout/Header";
import Particles from "@/components/background/Particles/Particles";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-[#05000C] text-[#F0E6FF]">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-[150px] z-10">
        <SearchBar />
        <Header />
      </div>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={350}
        particleSpread={15}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute inset-0"
      />
    </div>
  );
}