import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Using the third party library Zod to create our object with our properties
const schema = z.object({
  name: z.string().min(3,{message: 'Name must be at least characters.'}),
  age: z.number({invalid_type_error: 'Age field is required.'}).min(18, {message: 'Age must be at least 18.'}),
});

// creating type to pasing in our object
type FormData = z.infer<typeof schema>;

// interface to create our properties
// interface FormData{
//   name: string,
//   age: number 
// }

const ReactFormsExample = () => {
  // destructing the useForm and calling just the register object from useForm(). Also grabbing the handleSubmit from useForm
  // Passing in the interface <FormData>
  // inside of use form we pass in our zod resolver and pass in our schema
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   console.log(formState.errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <div>
        <h1>React Forms Example</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* copying the property and setting the property we want  */}
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {/* Validation for our name field, '&&' shortcut of a ternry operator */}
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          {/* copying the property and setting the property we want  */}
          <input
            {...register("age", {valueAsNumber:true})}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactFormsExample;
