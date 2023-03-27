

  export default function handler(req, res) {
      if (req.method === 'POST') {
          const comment = req.body;
          res.status(200).json(comment)
      } 
  
  
    }





