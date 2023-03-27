

import { connectToDatabase1 } from '../../util/mongodb1'

export default async function handler(req, res) {

 if (req.method === 'POST') {   
    const {db1} = await connectToDatabase1();

    const red = req.body; 
     
    const result = await db1.collection('mongcollect1').insertOne(red);

    const one = res.status(200).json(red)
    console.log(red)
 
    }
}
  
   

  





