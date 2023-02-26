

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useForm } from "react-hook-form";
import Link from 'next/link';



export default function web(){

       const { register, handleSubmit } = useForm();
       const onSubmit = async function(data){
       const response = await fetch("./api/mongapi", {
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify({data})
         })
         const resdata = await response.json();

       }

 




return (


<div className="bg-center bg-cover h-screen custom-img bg-fixed justify-center items-center flex" >

<div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-0"/>

<div className="p-5 text-white z-10 text-5xl font-bold w-[35rem] font-sans ml-[0rem] mt-[-30rem]">
       <Link href="/page2"><div>Performance-Potential Profile</div></Link>


</div>

<button onClick={handleSubmit(onSubmit)} className="p-5 text-black font-bold bg-gray-300 z-10 w-[15rem] font-sans ml-[-32rem] mt-[0rem]">Submit Profile</button>


<div className="w-[400px] ml-[35rem] mt-[-25rem] z-20">

<div className="mt-[25rem]">
<form className="space-y-2">
       <div>
<label className="p-2 text-white ml-[-0.5rem]">Q1: Did you find specific activities easy as a child</label>
<select className="w-[400px]" {...register("Q1")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
       </div>


       <div>
<label className="p-2 text-white ml-[-0.5rem]">Q2: Did you love doing these activities when you were younger</label>
<select className="w-[400px]" {...register("Q2")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q3: Did you experience traumatic events as a child-teen</label>
<select className="w-[400px]" {...register("Q3")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q4: Would you say you are obsessive about one thing</label>
<select className="w-[400px]" {...register("Q4")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q5: Did you practice over and over again during your teens-20's</label>
<select className="w-[400px]" {...register("Q5")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q6: Did you deliberately move home to pursue your talents as a teen-20's</label>
<select className="w-[400px]" {...register("Q6")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q7: Have you often lived/worked in a team atmosphere</label>
<select className="w-[400px]" {...register("Q7")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q8: Do people think you are an independent thinker that doesnt quite fit in</label>
<select className="w-[400px]" {...register("Q8")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q9: Are you trying to change the world</label>
<select className="w-[400px]" {...register("Q9")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q10: Are you a tinkerer/carefully looking at how things work and why</label>
<select className="w-[400px]" {...register("Q10")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
</div>

</form>  

</div>



</div>


</div>



)


}

