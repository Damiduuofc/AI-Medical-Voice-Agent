'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useState } from 'react'

function HistoryList() {
    const [historyList, setHistory] = useState([]);
  
    return (
        <div className='mt-8 px-4'>
            {historyList.length === 0 ? (
                <div className='flex flex-col items-center justify-center min-h-[50vh] p-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/30 transition-all hover:border-gray-300'>
                    <div className='relative mb-6'>
                        <Image 
                            src={'/medical-assistance.png'}
                            alt='No consultations'
                            width={120}
                            height={120}
                            className='opacity-80'
                        />
                    </div>
                    
                    <div className='text-center space-y-3 max-w-md'>
                        <h2 className='font-semibold text-xl text-gray-800'>
                            No Recent Consultations
                        </h2>
                        <p className='text-gray-500 text-sm leading-relaxed'>
                            Your consultation history will appear here. Start your first consultation to begin tracking your medical discussions.
                        </p>
                    </div>
                    
                    <Button 
                        className='mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md'
                    >
                        + Start New Consultation
                    </Button>
                </div>
            ) : (
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Consultation History</h2>
                    {/* History items will go here */}
                    <div className='text-gray-500'>History items will be displayed here...</div>
                </div>
            )}
        </div>
    )
}

export default HistoryList