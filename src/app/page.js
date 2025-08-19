"use client";
import Header from "@/components/layout/Header";
import Orb from "@/components/background/Orb/Orb";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [type, setType] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setType(value);
    setIsTyping(value.length > 0); 
  };

  return (
    <div className="relative w-screen h-screen bg-[#05000C] text-[#F0E6FF]">
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={isTyping}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-[100px] z-10">
        <div className="flex h-fit gap-[10px] rounded-full py-2 shadow-sm px-4 border border-white/50">
          <Search />
          <input
            className="bg-transparent text-white focus:outline-none focus:ring-0 focus:border-0"
            placeholder="Search"
            value={type}
            onChange={handleChange}
          />
        </div>

        <Header />
      </div>
    </div>
  );
}
