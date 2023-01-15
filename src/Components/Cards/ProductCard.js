import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pdtdata from '../Api/ProductApi';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link, NavLink} from "react-router-dom";

const ProductCard = () => {

    const [data,setData] = useState(pdtdata)

    const scrollUp = () => {
        window.scroll(0, 0);
        };
    
        useEffect(() => {
            scrollUp();
            // scrolltoview();
        }, []);

    return (
        <>
        <div className='bg-[#ececec] mt-10 p-4'>
            <div className='flex flex-wrap gap-5'>
            {
                data.map((value,idx)=>{
                    return(
                        <Card style={{ width: '18rem' }} key={idx} className='drop-shadow-xl'>
                        <Card.Img variant="top" src={value.pdtimg} />
                        <Card.Body>
                            <Card.Title className='capitalize'>{value.pdtname}</Card.Title>
                            <Card.Text>
                                {value.pdtdecs}
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{value.pdtprice}o</ListGroup.Item>
                                <ListGroup.Item>{value.pdtbundle}</ListGroup.Item>
                            </ListGroup>
                            <NavLink
                                key="prodcts"
                                to="/Order"
                                className="mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
                                border-blue-700 hover:border-blue-500 rounded no-underline"
                                >
                                        Order
                            </NavLink>
                        </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
        </div>
        
        </>
    );
}

export default ProductCard;
