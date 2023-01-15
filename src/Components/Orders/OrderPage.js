import axios from 'axios';
import React,{useState} from 'react';
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

// gs
// https://script.google.com/macros/s/AKfycbxGdek8ic-uZbldHWG8SgimSfhACKNTq5KAflMh4BGBivrbmGaT0fuC4mMJfkqwtxU/exec

const OrderPage = () => {

    //States
    const [fname,setFName] = useState('');
    const [lname,setLName] = useState('');
    const [address,setAdd] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zipcode,setZip] = useState('');
    const [meter,setMeter] = useState('');
    const [pdt,setpdt] = useState('');
    const [price,setPrice] = useState('');
    const [phoneno  ,setPhoneno] = useState('');
    const [email,setEmail] = useState('');
    // Handling sumbit

    const handleSumbit = (e)=>{
        e.preventDefault();
      
        console.log("came here")
        const datas = {
            FirstName: fname,
            LastName: lname,
            Address:address,
            State: state,
            City:city,
            ZipCode:zipcode,
            Meter: meter,
            Product: pdt,
            Price: price,
            Phoneno:phoneno,
            Email:email
        }

        console.log(datas);

        //Need to check tommrow
        // fetch(
        //     "https://script.google.com/macros/s/AKfycbzzLoCS_HfeEBAL__Qi9rYlDqWxTVf4PhcEvtbSPo6qUfPq9uJqX90TUQo1OT1sH-ZB/exec",
        //     {
        //         method:'POST',
        //         body: datas
        //     }
        // ).then((res)=> res)
        // .then((data)=>{
        //     console.log(data);
        // })
        // .catch((er)=>{
        //     console.log(er);
        // })

        // testing
        // {
        //     FirstName: 'sdfsdf',
        // LastName: 'sdfsdmhgff',
        // Address:'sdfsdfh',
        // State: 'sdfsdtdf',
        // City:'sdfsdfj',
        // ZipCode:'dgfdg',
        // Meter: 'sdfsdffhg',
        // Product: 'sdfsdasf',
        // Price: 'sdfsdfmj',
        // Phoneno:'sdfsdftyu',
        // Email:'sdfsdfdfgd'
            
        // }

        // actual working code

        axios.post('https://sheet.best/api/sheets/36aeeb7f-72a8-4361-b72b-f3a66cb44d34',datas).then((response)=>{
            console.log(response)

            if(response.status === '200'){
                toast("Ordered SucessFully")
            }

            // clearing
            setFName('')
            setAdd('')
            setCity('')
            setZip('')
            setLName('')
            setState('')
            setMeter('')
            setpdt('')
            setPrice('')
            setPhoneno('')
            setEmail('')
        }
            
        )
    }

    return (
        <div>
            <div className="p-4 flex justify-center bg-[#f6f6f6]">
            <form class="w-full max-w-lg" onSubmit={handleSumbit}>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Raja" value={fname} onChange={(e)=>setFName(e.target.value)} />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ram" value={lname} onChange={(e)=>setLName(e.target.value)} />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Address
            </label>
            <textarea  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32" id="grid-password" type="textarea" placeholder="Door No / Street Name" value={address} onChange={(e)=>setAdd(e.target.value)} />
            <p class="text-gray-600 text-xs italic">Provide the delivery Address</p>
            </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={state} onChange={(e)=>setState(e.target.value)}>
                <option>---</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
                <option>Andhra Pradesh</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={zipcode} onChange={(e)=>setZip(e.target.value)} />
            </div>
        </div>
        {/* start of this */}
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                meter
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="100m" value={meter} onChange={(e)=>setMeter(e.target.value)}/>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-pdt">
                Product
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-pdt" value={pdt} onChange={(e)=>setpdt(e.target.value)}>
                <option>---</option>
                <option>Raw-cotton</option>
                <option>Fabric-rolls</option>
                <option>Cotton-satin-fabric</option>  
                <option>Megumi-silky</option>
                <option>Pearl-white-cottom-mix</option>
                <option> Plain-polyster</option>
                <option> Plain-white-satin-grey</option>
                
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-price">
                Estimation Price
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="3150" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
        </div>
        {/* end of fking */}
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
               Phone No
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="tel" maxLength={10} placeholder="+91 9823467297" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-3/4 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="rajaram@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
        </div>
  <button class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="sumbit">
      Sumbit
    </button>
    </form>
    </div>
        </div>
    );
}

export default OrderPage;
