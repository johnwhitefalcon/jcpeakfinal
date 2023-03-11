
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
      <label htmlFor="name">Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}
      
      <button onClick={nextStep}>Next</button>
    </>
  );

  const renderStepTwo = () => (
    <>
      <label htmlFor="email">Email</label>
      <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && errors.email.type === "required" && (
        <span>Email is required</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span>Invalid email address</span>
      )}

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </>
  );

  const renderStepThree = () => (
    <>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && errors.password.type === "required" && (
        <span>Password is required</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span>Password must be at least 8 characters long</span>
      )}

      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
    </form>
  );
}
