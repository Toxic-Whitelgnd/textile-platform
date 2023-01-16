import React,{useEffect} from 'react';
import img1 from "../../Assests/abtus.jpg"


const AboutusPage = () => {
    const scrollUp = () => {
        window.scroll(0, 0);
        };
    
        useEffect(() => {
            scrollUp();
            // scrolltoview();
        }, []);
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 mt-4 p-4 bg-[#f6f6f6] shadow-xl">
                <h1>About US</h1>
                <div className='flex justify-center'>
                    <img src={img1} alt="abtus" />
                </div>
                
                <div className=''>
                    <ul className=''>
                        <li className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</li>
                        <li className='mt-3'> It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged.It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                        <li className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</li>
                        <li className='mt-3'>It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
       
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutusPage;
