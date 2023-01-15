import React from 'react';
import img1 from "../../Assests/homeabtus.jpg"
import {Link, NavLink} from "react-router-dom";

const HomeAboutus = () => {
    return (
        <div className='bg-[#ececec] p-3'>
            <h1>About US</h1>
            <div className='grid grid-cols-2 gap-2'>
            <div className="flex justify-center">
                    <img src={img1} alt="fabric-rolls" width={406} height={186} />
                    </div>
            <div className="text-left">
                    <h4>Know about us</h4>
                    <p className='mt-10 flex flex-wrap'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        <div className='mt-4'>
                        <NavLink
                            key="prodcts"
                            to="/Aboutus"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
                            border-blue-700 hover:border-blue-500 rounded no-underline"
                            >
                            Know more
                        </NavLink>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeAboutus;
