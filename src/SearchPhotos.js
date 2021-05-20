import React from "react"
import { useForm } from "react-hook-form"

const SearchPhotos = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log("HI",data)
  console.log(watch("example"))
  
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
         />
        <button className="button" onClick={() => (console.log('clicky'))}>Submit</button>
      </form>
    </>
  )
}

export default SearchPhotos