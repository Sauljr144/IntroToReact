import React, { FormEvent, useState } from 'react'

// Example of form using a useState

const FormStateExample = () => {

    const [person, setPerson] = useState({
        name:'',
        age: 0
    })

    const handleSubmit = (e: FormEvent)=>{
        // this prevents the submit button from refreshing the page
        e.preventDefault();
        console.log(person)
    }

  return (
    <>
    <div>
        <h1>UseState Form</h1>
    </div>
     <form onSubmit={handleSubmit}>
     <div className="mb-3">
       <label htmlFor="name" className="form-label">
         Name
       </label>
       <input onChange={(e)=> setPerson({...person, name: e.target.value})}  id="name" type="text" className="form-control" />
     </div>
     <div className="mb-3">
       <label htmlFor="age" className="form-label">Age</label>
       <input onChange={(e)=> setPerson({...person, age: e.target.valueAsNumber})} id="age" type="number" className="form-control" />
     </div>
     <button className="btn btn-primary" type="submit">Submit</button>
   </form>
   </>
  )
}

export default FormStateExample