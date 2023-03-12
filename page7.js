
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function WizardForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [number, setNumber] = useState(0);

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const nextStep = (value) => {
    setNumber(parseInt(value));
    setStep(step + 1);
  };

  const addNumberAndProceed = (value) => {
    const addedNumber = parseInt(value) + number;
    setNumber(addedNumber);
    setStep(step + 1);
  };

  const renderStepOne = () => (
    <>
      <label htmlFor="number">Enter a number:</label>
      <input type="number" {...register("number", { required: true })} />
      {errors.number && <span>Number is required</span>}
      
      {(() => {
        if (watch("number")) {
          return <button onClick={() => nextStep(watch("number"))}>Next</button>;
        }
      })()}
    </>
  );

  const renderStepTwo = () => (
    <>
      <p>The number entered in step one is: {number}</p>
      <label htmlFor="stepTwoNumber">Enter a number to add to the previous number:</label>
      <input type="number" {...register("stepTwoNumber", { required: true })} />
      {errors.stepTwoNumber && <span>Number is required</span>}
      
      {(() => {
        if (watch("stepTwoNumber")) {
          return <button onClick={() => addNumberAndProceed(watch("stepTwoNumber"))}>Next</button>;
        }
      })()}
    </>
  );

  const renderStepThree = () => (
    <>
      <p>The sum of numbers entered in steps one and two is: {number}</p>
      <label htmlFor="stepThreeNumber">Enter a number to add to the previous number:</label>
      <input type="number" {...register("stepThreeNumber", { required: true })} />
      {errors.stepThreeNumber && <span>Number is required</span>}
      
      {(() => {
        if (watch("stepThreeNumber")) {
          return <button onClick={() => addNumberAndProceed(watch("stepThreeNumber"))}>Next</button>;
        }
      })()}
    </>
  );

  const renderStepFour = () => (
    <>
      <p>The final sum of numbers entered in steps one, two, and three is: {number}</p>
      <label htmlFor="name">Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}
      
      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </>
  );

  const prevStep = () => setStep(step - 1);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
      {step === 4 && renderStepFour()}
    </form>
  );
}



