
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function WizardForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStepOne = () => (
    <>
      <label htmlFor="response">Do you want to proceed to step two? (Y/N)</label>
      <input {...register("response", { required: true })} />
      {errors.response && <span>Response is required</span>}
      
      {(() => {
  if (watch("response") === "Y") {
    return <button onClick={nextStep}>Next</button>;
  }
})()}

      {watch("response") === "N" && (
        <button disabled>Next</button>
      )}
    </>
  );

  const renderStepTwo = () => (
    <>
      <label htmlFor="name">Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}
      
      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
    </form>
  );
}


