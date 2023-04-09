
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useForm } from "react-hook-form";
import Link from 'next/link';


export default function pg4(){


return (

    <div className="text-white font-extrabold h-screen justify-center items-center bg-black flex" >
<div className="text-3xl fixed z-10 ml-[-45rem] mt-[-10rem] w-[20rem]">
Welcome to Vertical Edge Swimwear

</div>

<div>
    <img src="https://images.unsplash.com/photo-1606984505119-adefd5a259f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dpbXdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>

</div>

    </div>

)


}



