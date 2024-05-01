import React from 'react';
import { IoAddCircle } from "react-icons/io5";

export default function VehiclesDescription() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 bg-[#f7f8f9] p-3">Vehicles Description</h2>
      <div>
        <p className="text-base text-gray-500 leading-relaxed p-2 ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante sed dolor tempor, vitae
          posuere risus interdum. In hac habitasse platea dictumst. Sed tempus consectetur massa, eget
          fermentum magna commodo ac.
        </p>
        <p className="text-base text-gray-500 leading-relaxed p-2 ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante sed dolor tempor, vitae
          posuere risus interdum. In hac habitasse platea dictumst. Sed tempus consectetur massa, eget
          fermentum magna commodo ac.
        </p>
        <p className="text-base text-gray-500 leading-relaxed p-2 ml-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante sed dolor tempor, vitae
          posuere risus interdum. In hac habitasse platea dictumst. Sed tempus consectetur massa, eget
          fermentum magna commodo ac.
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
      <button className="flex items-center space-x-2 text-black px-4 py-2">
        <IoAddCircle size={30} className='text-blue-400' />
        <span>Show More</span>
      </button>
    </div>
    </>
  );
}
