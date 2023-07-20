import React from 'react'
import hero from './img/hero.svg'
import cardimg1 from './img/cardimg1.svg'
import cardimg3 from './img/cardimg3.svg'
import { ChartBarIcon } from '@heroicons/react/24/solid'

function Section3() {
    return (
        <div className='h-max w-full bg-purple-100 flex flex-col items-center mt-10'>
            <div className='hero-image flex-1 flex justify-center items-center md:justify-start md:items-start'>
                <img className='h-full w-full' src={hero} alt="hero image" />
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-center text-lg font-bold text-indigo-900 tracking-wide leading-normal w-3/4'>
                    <p className='text-amber-500 inline'>Hybrid</p> is the Future Of Education, and we are here to lead the way
                </p>
                <p className="text-sm text-left text-indigo-500 leading-loose px-5">
                    We cater to both your online and offline coaching needs, providing a seamless solution that empowers yur with your unique brand. <br /> Classio cover all 3M-
                </p>
                <div className='w-full px-8 flex flex-col gap-5'>
                    <div className='h-max w-full bg-white shadow-lg p-4 rounded-lg flex gap-5 items-center'>
                        <img src={cardimg1} alt="" />
                        <div className=''>
                            <p className='text-lg font-bold text-indigo-900 leading-normal'>Management</p>
                            <p className='text-xs text-indigo-900'>A 360<sup>o</sup> Institute Mangement System</p>
                        </div>
                    </div>
                    <div className='h-max w-full bg-white shadow-lg p-4 rounded-lg flex gap-5 items-center'>
                        <ChartBarIcon className='h-8 w-8 text-amber-500' />
                        <div className=''>
                            <p className='text-lg font-bold text-indigo-900 leading-normal'>Maintenance</p>
                            <p className='text-xs text-indigo-900'>Easy Tracking Team and student KPIs</p>
                        </div>
                    </div>
                    <div className='h-max w-full bg-white shadow-lg p-4 rounded-lg flex gap-5 items-center'>
                        <img src={cardimg3} alt="" />
                        <div className=''>
                            <p className='text-lg font-bold text-indigo-900 leading-normal'>Marketing Automation</p>
                            <p className='text-xs text-indigo-900'>From Media Ad buying plan to admission,everyting is covered in Classio</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-sm text-left text-indigo-500 leading-loose'>Lets Skyrocket your Growth with Classio</p>
                    <button className='w-max py-3 px-10 bg-fuchsia-700 rounded-md text-white text-lg font-bold'>Launch it Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Section3