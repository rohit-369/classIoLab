import React from 'react'
import sliderimg1 from './img/sliderimg-1.svg'
import sliderimg2 from './img/sliderimg-2.svg'
import sliderimg3 from './img/sliderimg-3.svg'

function Section2() {
    return (
        <div className='h-max w-full bg-purple-100 flex flex-col items-center'>
            <div className='flex flex-col gap-5 items-center'>
                <p className='text-center text-2xl font-bold text-indigo-900 leading-normal'>
                    Unleashing Potential With Classio
                </p>
                <p className='text-sm text-center text-indigo-500 leading-loose w-4/5'>
                    Classssio unleashes the potential of educational professionals by offering a powerful platform that caters to their diverse needs. Whether your're a:
                </p>
            </div>
            <div className='grid grid-flow-col overflow-x-scroll w-[375px]'>
                <div className='flex items-center w-[375px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <img className='rounded-md' src={sliderimg1} alt="" />
                        <p className='text-center text-lg font-bold text-indigo-900 leading-normal'>Individual Tutor</p>
                        <p className='text-sm text-left text-indigo-500 leading-loose w-3/5'>
                            Individual tutors can experience seamless growth without the need for extensive manpower, cost effectiveness.
                        </p>
                    </div>
                </div>
                <div className='flex items-center w-[350px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <img className='rounded-md' src={sliderimg2} alt="" />
                        <p className='text-center text-lg font-bold text-indigo-900 leading-normal'>Coaching Institute</p>
                        <p className='text-sm text-left text-indigo-500 leading-loose w-3/5'>
                            Easy to expand your presence both online and offline. With streamlined operations, seamless marketing automation, and comprehensive tools.
                        </p>
                    </div>
                </div>
                <div className='flex items-center w-[350px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <img className='rounded-md' src={sliderimg3} alt="" />
                        <p className='text-center text-lg font-bold text-indigo-900 leading-normal'>Content Creator</p>
                        <p className='text-sm text-left text-indigo-500 leading-loose w-3/5'>
                            With innovative features,seamless content management, and powerfull engagement tools, Classio propels your growth and thrive in the digital space.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2