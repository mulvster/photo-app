import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Unsplash, { toJson } from "unsplash-js";

const unsplash =  new Unsplash({
  accessKey: "ZrXHdFovpKQwQMTMGzPgSaf-Y1c0cUEpes5zECCgFMo"
})

const SearchPhotos = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [formValue, setFormValue] = useState('')
  const [pics, setPics] = useState([])

  const searchPhotos = async (e) => {
    console.log("Submitting the Form")
    unsplash.search
    .photos(formValue)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });
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
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
  )
}

export default SearchPhotos