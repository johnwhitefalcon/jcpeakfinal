
import React from 'react';
import Image from 'next/image';
import { Button, Input } from 'antd';
import Link from 'next/link';

import Head from "next/head";
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";


export default function pg2(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [result, setResult] = useState();
  
    async function onSubmit({ animal }) {
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ animal }),
        });
  
        const data = await response.json();
  
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
  
        setResult(data.result);
        console.log(data.result)
  
        setValue("animal", "");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }




return (

    <div className="text-white bg-center bg-cover h-screen custom-img2 bg-fixed justify-center items-center flex" >
<div className="space-y-5">
<div className="text-white mt-[-20rem] ml-[-35rem]">
<form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="animal"
            placeholder=""
            {...register("animal", { required: true })}
          />
          {errors.animal && <span>This field is required</span>}
          <input type="submit" value="" />
        </form>
     



</div>
   <div className="text-white mt-[-20rem] ml-[10rem]">{result}</div>

</div>


    </div>

)


}







