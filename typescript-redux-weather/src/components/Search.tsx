import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/actions/weatherActions";
import { setAlert } from "../store/actions/alertActions";

interface SearchProps {
   title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
   const [city, setCity] = useState("");

   const dispatch = useDispatch();

   const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setCity(e.currentTarget.value);
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (city.trim() === "") {
         dispatch(setAlert("Please enter a city"));
         return;
      }

      dispatch(getWeather(city));
      setCity("");
   };

   return (
      <div className="hero is-light has-text-centered">
         <div className="hero-body">
            <div className="container">
               <h1 className="title">{title}</h1>
               <form onSubmit={handleSubmit} className="py-5">
                  <input
                     type="text"
                     className="input has-text-centered mb-2"
                     placeholder="Enter city name"
                     style={{ maxWidth: 300 }}
                     value={city}
                     onChange={handleChange}
                  />
                  <button
                     className="button is-primary is-fullwidth"
                     style={{ maxWidth: 300, margin: "0 auto" }}
                  >
                     Search
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Search;
