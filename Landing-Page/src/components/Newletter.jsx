import React from 'react';

export default function Newletter() {
  return (
    <div className="bg-[#f7f8f9]" style={{
      backgroundImage: 'linear-gradient(#f0f0f0 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #f0f0f0 calc(100% - 0.5px)), linear-gradient(90deg, #f0f0f0 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #f0f0f0 calc(100% - 0.5px))',
      backgroundSize: '25px 25px',
    }}>
      <div className="max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
          <div className="lg:flex-1 xl:w-0">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-3xl">Sign up for our newsletter</h2>
            <p className="mt-3 max-w-3xl font-medium text-xl leading-6 text-gray-500">Stay in the loop with everything you need to know.</p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex">
              <input type="email" required="" className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0" placeholder="Enter your email" />
              <button type="submit" className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-[#013f88] px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
            </form>
            <p className="mt-3 text-sm text-gray-500">We care about your data in our <span className="text-[#013f88]">privacy policy</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
