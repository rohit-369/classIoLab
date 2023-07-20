import React from 'react'

function Section4() {
    return (
        <div className='h-max w-full bg-purple-100 flex flex-col items-center mt-14 gap-5'>
            <p className='py-2 px-8 bg-indigo-200 text-indigo-600 font-semibold rounded-md'>Still Curious??</p>
            <div className='flex flex-col items-center gap-5'>
                <p className='text-center text-lg font-bold text-indigo-900 tracking-wide leading-normal w-3/4'>
                    Lets compare Classio with other products
                </p>
                <p className="text-center text-sm text-indigo-500 leading-loose px-8">
                    Discorver why Classio is <p className='text-red-500 inline'>#1 choice</p> for you <br />We will compare Classio with other on following points:
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 center gap-3'>
                    <p className='p-3 bg-white text-indigo-900 text-[10px] font-bold  rounded-md'>App Design Customization</p>
                    <p className='p-3 bg-white text-indigo-900 text-[10px] font-bold rounded-md'>Rented or Owned platform</p>
                    <p className='p-3 bg-white text-indigo-900 text-[10px] font-bold rounded-md'>10% or <p className='inline text-red-500'>0%</p> Revenue Share</p>
                    <p className='p-3 bg-white text-indigo-900 text-[10px] font-bold rounded-md'>All in One Platform access</p>
                    <p className='p-3 bg-white text-indigo-900 text-[10px] font-bold rounded-md'>Data Ownership & Security</p>
                </div>
            </div>
        </div>
    )
}

export default Section4