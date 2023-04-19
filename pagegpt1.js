

import React from 'react';
import Image from 'next/image';
import { Button, Input } from 'antd';
import Link from 'next/link';

import Head from "next/head";
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";


export default function pg2(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [result, setResult] = useState(null);
    const [isHidden, setIsHidden] = useState(true);


    async function onSubmit({forminput1}) {
      try {
        const response = await fetch("/api/gpt1", {
          method: "POST",
          body: JSON.stringify({prompt1: forminput1}),
          headers: {
            "Content-Type": "application/json",
          },
          
        });
  
        const data1 = await response.json();
  

        setResult(data1.result);
     
        
        setIsHidden(false);
  
        setValue("");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }

    

return (

    <div className="text-white bg-black bg-cover h-screen items-center justify-center flex">


<div className="z-10 mt-[-36rem] ml-[-35rem] text-7xl font-bold absolute">
  GPT Generated Letter of Offer
</div>


{isHidden && ( 
<div className="z-10 mt-[-15rem] ml-[-75rem] text-2xl absolute">
  I want to create a letter for:
</div>
)}



{isHidden && (  
<div className="text-black mt-[-15rem] ml-[-20rem] absolute">
<form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-[30rem]"
            type="text"
            name="forminput1"
            placeholder=""
            {...register("forminput1", { required: true })}
          />
         
          <input type="submit" value="" />
        </form>
     



</div>

)}

{!isHidden && (
   <div className="text-white mt-[-10rem] ml-[-40rem] w-[30rem] absolute z-10">{result}</div>

   )}

<div className="mt-[50rem] ml-[60rem] mb-[60rem] transform scale-90 absolute">

<img src='https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHBsYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />

</div>

    </div>

)


}




