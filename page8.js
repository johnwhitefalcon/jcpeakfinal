import React from 'react';
import fs from 'fs';  


export default function jc(){
 



  return(
    <div>

    </div>


  )

}


export async function getStaticProps (){
  
  const filePath = 'C:/JCtest/testpdf.txt';
  const data = 'the big fella';

  fs.writeFile(filePath, data, (err) => {

  });



  return {
    props: {
      
    }
  }
}
