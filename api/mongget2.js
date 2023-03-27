


import { connectToDatabase2 } from '../../util/mongodb2'

export default async function handler(req, res) {

 if (req.method === 'GET') {   
    const {db} = await connectToDatabase2();

     
    const result = await db.collection('mongcollect2').find({}).toArray();

   
    const one = res.status(200).json(result)
    console.log(one)
 
    }
}
  
   



