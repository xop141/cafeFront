import React from "react";
import TrueFocus from "../animation/TrueFocus/TrueFocus";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const near = () => {
    router.push("/nearMe");
  };
  const explore = () => {
    router.push("/explore");
  };
  return (
    <div className="flex flex-col gap-[35px]">
      <TrueFocus
        sentence="Spot On"
        manualMode={false}
        blurAmount={5}
        borderColor="#6A0DAD"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <div className="flex justify-between">
        <Button
          variant="secondary"
          className="bg-transparent border border-white/50 text-[#F0E6FF] hover:bg-[#7C3AED]"
          onClick={() => explore()}
        >
          EXPLORE
        </Button>
        <Button
          variant="secondary"
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] border border-white/50 text-[#F0E6FF]"
          onClick={() => near()}
        >
          Near Me
        </Button>
      </div>
    </div>
  );
};

export default Header;
