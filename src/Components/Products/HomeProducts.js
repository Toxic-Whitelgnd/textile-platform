import React from 'react';
import img2 from "../../Assests/fabric-rolls.jpeg"
import img3 from "../../Assests/raw-cotton.jpeg"
import {Link, NavLink} from "react-router-dom";

const HomeProducts = () => {
    return (
        <div className='bg-[#ececec] p-3'>
            <h1>Products</h1>
            <div className="grid grid grid-cols-2 gap-2">
                <div className="text-left">
                    <h4>Fabric-Rolls</h4>
                    <p className='mt-10'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={img2} alt="fabric-rolls" width={356} height={356} />
                </div>
                <div className="text-left">
                    <h4>Raw-Cotton</h4> 
                    <p className='mt-10'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={img3} alt="fraw" width='356' height='100'  />
                </div>
            </div>
            <div>
            <NavLink
                key="prodcts"
                to="/Products"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
                border-blue-700 hover:border-blue-500 rounded no-underline"
                >
                            Read More
            </NavLink>
            </div>
        </div>
    );
}

export default HomeProducts;
