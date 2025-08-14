import React from "react";
import TrueFocus from "../animation/TrueFocus/TrueFocus";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <div className="flex flex-col gap-[35px]">
      <TrueFocus
        sentence="Spot On"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <div className="flex justify-between">
        <Button variant="secondary" className='bg-transparent border-1 border-white/50 text-[#F0E6FF]'>EXPLORE</Button>
         <Button variant="secondary" className='bg-transparent border-1 border-white/50 text-[#F0E6FF]'>Near Me</Button>
      </div>
    </div>
  );
};

export default Header;
