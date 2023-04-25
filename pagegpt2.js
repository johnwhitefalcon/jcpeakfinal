


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
        const response = await fetch("/api/gpt2", {
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
  GPT Generated Disciplinary Meeting Invitation & PDF & Send
</div>


{isHidden && ( 
<div className="z-10 mt-[-15rem] ml-[-65rem] text-2xl absolute">
  Arrange a disciplinary meeting with- Enter email:
</div>
)}



{isHidden && (  
<div className="text-black mt-[-15rem] ml-[-5rem] absolute">
<form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-[20rem]"
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

<div className="mt-[50rem] ml-[60rem] mb-[45rem] transform scale-90 absolute">

<img src='https://plus.unsplash.com/premium_photo-1679672024088-16c740190d44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />

</div>

    </div>

)


}



export async function getServerSideProps(context) {
  var exec = require('child_process').exec;

  exec('start "" "C:/JCtest/testpdf.txt"', (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
    });

  return {
    props: {}, // will be passed to the page component as props
  }
}




