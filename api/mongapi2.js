

import { connectToDatabase2 } from '../../util/mongodb2'

export default async function handler(req, res) {

 if (req.method === 'POST') {   
    const {db} = await connectToDatabase2();

    const red = req.body; 
     
    const result = await db.collection('mongcollect2').insertOne(red);

    const one = res.status(200).json(red)
    console.log(red)
 
    }
}
  
   

  

