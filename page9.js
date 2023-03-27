import React from 'react';
import fs from 'fs';  


export default function jc(){
 



  return(
    <div>

    </div>


  )

}


export async function getServerSideProps({ res }) {
    const filePath = 'C:/JCtest/testpdf.txt';
    const stream = fs.createReadStream(filePath);
  
    stream.pipe(res);
  
    return {
      // No need to return props for an API route that streams a file
    };
  }