import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ReactFormsExample = () => {
  // destructing the usForm and calling just the register object from useForm(). Also grabbing the handleSubmit from useForm
  const { register, handleSubmit, formState:{errors} } = useForm();
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
            {...register("name", {required: true, minLength: 3})}
            id="name"
            type="text"
            className="form-control"
          />
          {/* Validation for our name field, '&&' shortcut of a ternry operator */}
            {errors.name?.type === 'required' && <p className="text-danger">The name field is required.</p>}
            {errors.name?.type === 'minLength' && <p className="text-danger">The name must be at least 3 characters long.</p>}
        </div>


        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          {/* copying the property and setting the property we want  */}
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactFormsExample;
