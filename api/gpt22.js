
var exec = require('child_process').exec;
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function (req, res) {

  if (req.method === 'POST') {
    
  const {prompt1} = req.body
  console.log(prompt1)
  
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(prompt1),
      max_tokens: 100,
      temperature: 0.8,
    });

   
 res.status(200).json({result: completion.data.choices[0].text});
   
 
}



function generatePrompt(prompt1) {
  
 return `
  Email ${prompt1}
  
  Write an email invitation to advise the name of the person in the email that they are required to attend a meeting to discuss concerns about their attendance at work
  
  The Subject line of the email should be RE PERFORMANCE DISCUSSION
  The body of the email should be formatted in the following way:
    Location:
    Date:
    Time:

    The person being invited to the meeting is able to bring a support person to the meeting


  Regards John

  `
   
}

    
    // Handle the POST request here

     exec('start "" "C:/JCtest/testpdf.txt"', (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
    });
    res.status(200).json({ success: true });
  }
 
  


