import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";

export default function CarImages() {
  return (
    <section className="bg-white">
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-3 sm:col-span-2 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <a href="" className="group relative flex flex-col rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxBdWRpfGVufDB8MHx8fDE3MTQ1NjEzMzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                   
                </a>
            </div>
            <div className="col-span-3 sm:col-span-2 md:col-span-3 bg-stone-50">
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    <a href="" className="relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40">
                        <img src="https://images.unsplash.com/photo-1627905881338-1143151b9a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8QXVkaXxlbnwwfDB8fHwxNzE0NTYxMzM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        
                    </a>
                    <a href="" className="relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                        <img src="https://images.unsplash.com/photo-1604434057517-3575f9dbee5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8YXVkaSUyMGludGVyaW9yfGVufDB8MHx8fDE3MTQ1NjE1Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                       
                    </a>
                    <a href="" className="relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                        <img src="https://images.unsplash.com/photo-1616325763793-cbc68a6500ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YXVkaSUyMGludGVyaW9yfGVufDB8MHx8fDE3MTQ1NjE1Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                       
                    </a>
                    <a href="" className="relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                        <img src="https://images.unsplash.com/photo-1527383418406-f85a3b146499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXIlMjBlbmdpbmV8ZW58MHwwfHx8MTcxNDU2MTcxN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                       
                    </a>
                </div>
            </div>  
            <div className="col-span-5 md:col-span-5 flex justify-center items-center py-4">
                <div className="grid grid-cols-4 gap-4 w-full text-gray-500">
                    <div className="flex flex-col items-center">
                        < FaCalendarCheck style={{ width: '30px', height: '30px'}}/>
                        <span className='text-2xl font-medium'>2023</span>
                    </div>
                    <div className="flex flex-col items-center">
                     <IoIosSpeedometer style={{ width: '30px', height: '30px'}}/> 


                        <span className='text-2xl font-medium'>21000 KM</span>
                    </div>
                    <div className="flex flex-col items-center">
               
                        <MdElectricCar style={{ width: '30px', height: '30px'}}/>
                        <span className='text-2xl font-medium'>Electric</span>
                    </div>
                    <div className="flex flex-col items-center">
                 
                    <FaCarSide style={{ width: '30px', height: '30px'}}/>

                        <span className='text-2xl font-medium'>Automatic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
