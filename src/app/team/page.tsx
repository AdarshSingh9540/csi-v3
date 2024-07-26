import { people1, people2 } from '@/data/teamData'
import React from 'react'
import Image from '../../../node_modules/next/image'

export default function team() {
  return (
    <div>
        <div className=' text-3xl font-semibold flex w-screen justify-center cursor-default'>
          <h1>
            OUR TEAM
          </h1>
          {/* <Image width={100} height={150} src="https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg" /> */}
        </div>
        <div className=' flex justify-center sm:gap-20 gap-10 p-4 sm:mt-10 mt-2 '>
          {people1.map((eachPerson) => (
            <div className='font-medium text-xs sm:text-xl'> 
              <div className='flex justify-center overflow-hidden sm:rounded-2xl rounded-full '>
                  <img className=' sm:h-[300px] h-[130px]  sm:hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} />
              </div>
              <div className=' text-center p-4'>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default' >{eachPerson.name}</h2>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default'>{eachPerson.position}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className='justify-items-center sm:gap-20 gap-10 p-4 m-2 sm:mt-20 mt-5 grid grid-cols-4'>
          {people2.map((eachPerson) => (
            <div className='font-medium text-xs sm:text-xl '> 
              <div className='flex justify-center overflow-hidden sm:rounded-2xl rounded-full '>
                <img className=' sm:h-[300px] h-[130px] sm:hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} />
              </div>
              <div className=' text-center p-4'>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default' >{eachPerson.name}</h2>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default' >{eachPerson.position}</h2>
              </div>
            </div>
          ))}
        </div>
    </div>
    
  )
}
