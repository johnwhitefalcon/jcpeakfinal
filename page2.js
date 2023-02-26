import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useForm } from "react-hook-form";
import Link from 'next/link';


export default function pg2(){


return (

    <div className="text-white bg-center bg-cover h-screen custom-img1 bg-fixed justify-center items-center flex" >
<div className="space-y-5">
<div>
        <Link href="https://www.linkedin.com/feed/"><div>Go to Linkedin</div></Link>
</div>
<div>
        <Link href="/"><div>Return to Main</div></Link>
</div>

</div>


    </div>

)


}







