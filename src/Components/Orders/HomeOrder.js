import React from 'react';
import img2 from "../../Assests/fast-delivery.jpg"
import img3 from "../../Assests/easy-order.jpeg"
import {Link, NavLink} from "react-router-dom";

const HomeOrder = () => {
    return (
        <div className='bg-[#ececec] p-3'>
            <h1>Order</h1>
            <div className='grid grid-cols-2 gap-2'>
            <div className="text-left">
                    <h4>Easily-Orderable</h4>
                    <p className='mt-10 flex flex-wrap'>
                        Easy to order. We recive orders based on your Product interest and customer satisfaction.
                        Start Ordering Now 
                        <div className='mt-4'>
                        <NavLink
                            key="prodcts"
                            to="/Order"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
                            border-blue-700 hover:border-blue-500 rounded no-underline"
                            >
                            Order Now
                        </NavLink>
                        </div>
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={img3} alt="fabric-rolls" width={206} height={186} />
                </div>
                <div className="text-left">
                    <h4>Fast-Deleviry</h4> 
                    <p className='mt-10'>
                        We Provide a fast Delivery . The Product will be delivered within 2 to 3 days. 
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={img2} alt="fraw" width='346' height='100'  />
                </div>
            </div>
        </div>
    );
}

export default HomeOrder;
