import React, { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import OneBook from "./OneBook";
import axios from "axios";

const Bokks = () => {
  const {info, setInfo} = useState({});
  const getData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a35448b47emsh9f0c8cc583b4fedp13c849jsn6874c09a85f3',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    };
    
    fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
    .then((res) => res.json()).then((da) => {setInfo(da);console.log(da)});
};

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <h1> Books App</h1>
        <div className="Search">
          <input placeholder="Search For Movie" onChange={() => {}} />
          <FaSistrix onClick={() => {}} />
        </div>

        <div>
          {info.map((book) => (
            <OneBook book={book} />
          ))}
        </div>

        <div className="empty">
          <h2> No info Found</h2>
        </div>
      </div>
    </>
  );
};

export default Bokks;
