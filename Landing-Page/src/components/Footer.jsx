import React from 'react'
export default function Footer() {
  return (
    <footer className="bg-[#013f88]">
    <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 className="text-md font-semibold leading-6 text-white">About</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">About us</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Teams</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Investors</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold leading-6 text-white">Products</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Used Cars</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">New Cars</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Show Rooms</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Dealers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Blogs</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Faqs</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-md font-semibold leading-6 text-white">Useful Links</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Classic Cars for sale</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Used Cars</a>
                            </li>
                            <li>
                                <a href="#" className="text-md leading-6 text-gray-300 hover:text-gray-50">Upcoming Cars</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="flex mt-16 border-t pt-8">
                <div className="text-white">All Rights Reserved @ MARADHA 2021</div>
                <div className="flex-grow"></div>
                <div className="items-center justify-center gap-3 md:flex">
                    <a href="#" className="text-white">Terms & Conditions</a>
                    <a href="#" className="text-white">Privacy & Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
