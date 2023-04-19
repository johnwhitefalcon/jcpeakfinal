



import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  

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
  Hello ${prompt1}
  10 Gardner Street
  Dudley Newcastle NSW 2290

  RE: LETTER OF OFFER
  Create a one paragraph letter which is an offer of a job as a Human Resources Manager at the Port of Newcastle.
   
  Use the following headings: Start Date, Salary

  Finish the letter with Warm Regards John

  `
   
}




