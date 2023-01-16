import React from 'react';

const Footer = () => {
    return (
        <div>
            
        <footer className="p-4 bg-[#d0d0d0] rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center no-underline mb-4 sm:mb-0 ">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Akatsuki</span>
                </a>
                <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/#/Aboutus" className="text-slate-600 mr-4 hover:underline md:mr-6 no-underline">About</a>
                    </li>
                    <li>
                        <a href="/#/Aboutus" className="text-slate-600 mr-4 no-underline hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/#/Products" className="text-slate-600 mr-4 no-underline hover:underline md:mr-6 ">Products</a>
                    </li>
                    <li>
                        <a href="/#/Order" className="text-slate-600 no-underline hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="text-slate-600 no-underline hover:underline">Akatsuki™</a>. All Rights Reserved.
            </span>
        </footer>

        </div>
    );
}

export default Footer;
