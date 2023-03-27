

import { connectToDatabase1 } from '../../util/mongodb1'

export default async function handler(req, res) {

 if (req.method === 'GET') {   
    const {db1} = await connectToDatabase1();

     
    const result = await db1.collection('mongcollect1').find({}).toArray();

   
    const one = res.status(200).json(result)
    console.log(one)
 
    }
}
  
   






