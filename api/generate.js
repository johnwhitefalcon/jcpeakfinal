


import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  

  const animal = req.body.animal  || '';
  
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      max_tokens: 20,
      temperature: 0.7,
    });
    res.status(200).json({result: completion.data.choices[0].text});



 
}


function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `${capitalizedAnimal}`;
    
}




