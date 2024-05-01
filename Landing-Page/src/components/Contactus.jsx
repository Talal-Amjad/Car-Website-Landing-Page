import React from 'react';

export default function Contactus() {
  return (
    <div className="bg-white dark:bg-gray-800 flex justify-center w-screen min-h-screen p-5 border border-gray-300 rounded gap-5 overflow-y-hidden">
      <div className="flex flex-col w-[450px] md:w-[50%] max-w-1/3 gap-7">
        <div>
          <h1 className="font-bold text-xl">Seller Details</h1>
          <p className="text-zinc-400">With thousands of cars, we have just the right one for you.</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="logo.png" className="h-full w-[80px]" alt="Logo"/>
          <div>
            <h1 className="font-medium text-lg">Brooklyn Simmons</h1>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500 font-semibold">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span className="ml-2 text-gray-400 text-sm">(4.5/5)</span>
            </div>
            <a className="text-blue-800 font-medium text-sm" href="#">See Reviews</a>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-lg">Showroom Details</h1>
          <div className="px-3">
            <div className="flex gap-2">
              <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
              <p className="text-zinc-400">Closed Now, Open at 9am.</p>
            </div>
            <div className="flex gap-2">
              <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
              <p className="text-zinc-400">6391 Elgin St. Celina, Delaware 10299</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-lg">Contact Information</h1>
          <div className="px-3">
            <div className="flex gap-2">
              <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
              <p className="text-zinc-400">(209) 555-0104</p>
            </div>
            <div className="flex gap-2">
              <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
              <p className="text-zinc-400">alma.lawson@example.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="flex justify-center w-full bg-zinc-200 py-2 rounded gap-2">
            <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
            <p className="text-zinc-400">Email Us</p>
          </button>
          <button className="flex justify-center w-full bg-blue-900 py-2 rounded gap-2">
            <img src="logo.png" className="h-full w-[30px]" alt="Logo"/>
            <p className="text-white font-medium">Call Us Now</p>
          </button>
        </div>
      </div>
      <div className="md:flex flex-col hidden md:w-[50%] max-w-[550px] bg-zinc-200 p-5 rounded">
        <h1 className="text-black text-lg font-semibold">Contact Seller</h1>
        <form className="mt-12 w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm">Your Name</label>
            <input className="rounded h-8"/>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Your Email</label>
            <input className="rounded h-8"/>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Your Phone No</label>
            <input className="rounded h-8"/>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Your Message</label>
            <textarea cols="10" rows="6" className="rounded"></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <button className="flex justify-center text-white font-medium w-full bg-blue-900 py-2 rounded gap-2">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
