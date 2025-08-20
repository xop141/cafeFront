"use client";
import Header from "@/components/layout/Header";
import Orb from "@/components/background/Orb/Orb";
import { Search } from "lucide-react";
import { useState, useRef } from "react";
import axios from "axios";

export default function Home() {

  const [isTyping, setIsTyping] = useState(false);
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
   
    setIsTyping(value.length > 0);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      if (value.trim() === "") return;

      try {
        const response = await axios.post("http://localhost:9000/cafe/search", {
          searchValue: value,
        });
        console.log(response.data); 
      } catch (err) {
        console.error("Search request error:", err);
      }
    }, 300);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={isTyping}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-[100px] z-10">
        <div
          className="flex h-fit gap-[10px] rounded-full py-2 shadow-sm px-4 border border-white/50 absolute top-[50px] animate-bounce-slow"
        >
          <Search />
          <input
            className="bg-transparent focus:outline-none focus:ring-0 focus:border-0"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>

        <Header />
      </div>
    </div>
  );
}
