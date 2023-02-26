

import React from 'react';
import {connectToDatabase} from '../util/mongodb'
import {connectToDatabase1} from '../util/mongodb1'
import { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
var promise = require('promise');

export default function prom({data, data1}){


  var one = [5,10,15,20]
  var two = [];
  var three = [];
  var four = [];
  var five = {};
  var six = [];
  var b = [];
 
  
  const [statea, stateb] = useState([]);
  const [state1, state2] = useState(false);
  

var a = data.map(function(it){
  
    two.push(it.data.Q1, it.data.Q2, it.data.Q3, it.data.Q4, it.data.Q5, it.data.Q6, it.data.Q7, it.data.Q8, it.data.Q9, it.data.Q10)
  })  
 
 
for(var i = 0; i<two.length; i=0){
  b = two.splice(0, 10)
  three.push(b)

  
  var c = three.flat()
  var d = c.map(function(item){
    return Number(item)
  })
  
 

  var e = d.reduce(function(f,g){return f+g
  
  },0)

 four.push(e)

 

  var three = []
}


function f1(){  
  var keyx = 'Score'
  var countx = 0
  for(var i = 0; i<four.length; i++){
    countx = countx+1
    five[keyx+countx] = four[i]
  }
}
f1();



 useEffect(() => { 
 
  state2(true)
    async function postapi(){
  

      const response = await fetch("./api/mongapi1", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(five)
        })
        const h = await response.json();
         console.log(h)  
         stateb(h)
         
         state2(false) 
        

      }
      postapi();
         

   }, [])

     


 
    var i = data1.map(function(it){
  
      six.push(it)
    })  

  


return (
    <div>
        {}
    </div>
)
}

export async function getServerSideProps(context) {

    const {db} = await connectToDatabase();
  
    const data = await db.collection('mongcollect').find({}).toArray();

    const {db1} = await connectToDatabase1();
  
    const data1 = await db1.collection('mongcollect1').find({}).toArray();

      
    return {
      props: { data: JSON.parse(JSON.stringify(data)),
               data1: JSON.parse(JSON.stringify(data1))
      }
    }
  
  }




