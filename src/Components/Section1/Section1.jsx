import React from 'react'
import hero from './img/hero.svg'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import partner1 from './img/partner-1.svg'
import partner2 from './img/partner-2.svg'
import partner3 from './img/partner-3.svg'


function Section1() {
    return (
        <div className='h-max w-full bg-purple-100 flex flex-col items-center'>
            <div className='w-full flex flex-col md:flex-row-reverse md:justify-between'>
                <div className='hero-image flex-1 flex justify-center items-center md:justify-start md:items-start'>
                    <img className='h-full w-full' src={hero} alt="hero image" />
                </div>
                <div className='hero-image flex-1 flex flex-col items-center gap-8 md:items-start'>
                    <p className='py-2 px-8 bg-white text-indigo-600 font-semibold rounded-md'>Welcome at Classio</p>
                    <p className='text-center text-3xl font-bold text-indigo-900 tracking-wide leading-normal md:text-left'>Classio is the<p className='text-amber-500'>#Top Choice<p className='text-indigo-900 inline'> for</p></p>Edtech players</p>
                    <p className='text-sm text-center text-indigo-500 leading-loose md:text-left'>We cater to both your online and offline <br /> coaching needs, providing a seamless solution <br /> that empowers your with your unique brand.</p>
                    <div className='w-full flex flex-col items-center gap-5 md:flex-row'>
                        <button className='md:w-max w-3/5 py-3 px-10 bg-fuchsia-700 rounded-md text-white text-lg font-medium'>Let's Talk</button>
                        <button className='md:flex-1 w-max py-4 text-indigo-900 font-semibold flex items-center gap-3 '><PlayCircleIcon className='h-8 w-8 inline' /> <p className='inline'>New Age Learning Platform</p></button>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-around items-center py-16'>
                <div className='grayscale'>
                    <img src={partner1} alt="advertice" />
                </div>
                <div className='grayscale flex'>
                    <img src={partner2} alt="whatsapp business" />
                    <p className='leading-tight flex flex-col justify-center'>
                        <p className='text-[11px]'>Whatsapp</p>
                        <p className='text-[11px]'>Business</p>
                    </p>
                </div>
                <div className='grayscale'>
                    <img src={partner3} alt="me" />
                </div>
            </div>
        </div>
    )
}

export default Section1