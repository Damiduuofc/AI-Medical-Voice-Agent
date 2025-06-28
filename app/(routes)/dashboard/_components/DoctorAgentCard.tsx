import { Button } from '@/components/ui/button';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image'
import React from 'react'

type doctorAgent = {
  id: number;
  description: string;
  image: string;
  agentPrompt: string;
  specialist: string;
}

type props = {
  doctorAgent: doctorAgent;
} 

function DoctorAgentCard({doctorAgent}: props) {
  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow'>
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={200}
        height={200}
        className="w-full h-[180px] object-cover rounded-lg mb-3"
      />
      
      <div className='space-y-2'>
        <h2 className='cursor-default font-bold text-lg line-clamp-1'>
          {doctorAgent.specialist}
        </h2>
        <p className='cursor-default line-clamp-2 text-sm text-gray-600 leading-relaxed'>
          {doctorAgent.description}
        </p>
      </div>

      <Button className='cursor-pointer w-full mt-4 flex items-center justify-center gap-2'>
        Start Consult 
        <IconArrowRight size={16}/>
      </Button>
    </div>
  )
}

export default DoctorAgentCard