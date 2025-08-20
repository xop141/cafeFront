import React from 'react'
import { Progress } from "@/components/ui/progress"


const CafeCard = () => {
  return (
    <div className='rounded-[16px] border w-fit p-[8px]'>
      <div className='rounded-[8px] border w-[280px] h-[400px] bg-gray/60 flex items-end'>
<div className='w-full'>
    <h1 className='font-[700] text-[32px]'>Skol</h1>
    <Progress value={80} className="bg-white"/>
</div>
      </div>
    </div>
  )
}

export default CafeCard
