import React, { useState } from "react"
import { useForm } from "react-hook-form"

const SearchPhotos = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [formValue, setFormValue] = useState('')
  console.log("Form value here",formValue)

  const onSubmit = () => {
    console.log("SUBMIT")
  }
  
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="label" htmlFor="query"> 
          📷
      </label>
         <input 
          type="text"
          name="query"
          className="input"
          {...register("exampleRequired", { required: true })} 
          placeholder={`Try "space" or "cat"`}
          value={formValue}
          onChange={(ev) => setFormValue(ev.target.value)}
         />
        <button className="button" onClick={() => (console.log('clicky'))}>Submit</button>
      </form>
    </>
  )
}

export default SearchPhotos