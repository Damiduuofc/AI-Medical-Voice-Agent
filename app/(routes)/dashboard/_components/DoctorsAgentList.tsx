import { AIDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

function DoctorsAgentList() {
  return (
    <div className='mt-10 px-4'>
      <h2 className='cursor-default font-bold text-xl mb-6'>AI Specialist Doctor Agent</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {AIDoctorAgents.map((doctor, index) => (
          <DoctorAgentCard 
            key={index}
            doctorAgent={doctor}
          />
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList