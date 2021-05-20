import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Unsplash, { toJson } from "unsplash-js";

const unsplash =  new Unsplash({
  accessKey: "ZrXHdFovpKQwQMTMGzPgSaf-Y1c0cUEpes5zECCgFMo"
})

const SearchPhotos = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [formValue, setFormValue] = useState('')

  const searchPhotos = async (e) => {
    console.log("Submitting the Form")
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(searchPhotos)}>
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
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  )
}

export default SearchPhotos