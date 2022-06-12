import React from "react";
import "./SearchForm.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getUserByName } from "../../features/userSlice";

const SearchForm = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    setUsername(e.target.value);
    dispatch(getUserByName(username));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-form-container">
      <div className="basic-info">
        <h1>Find Your GitHub Profile</h1>
        <h3>Insert your github username in the search box...</h3>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input type="text" onChange={searchHandler} />
        </div>
        <div>
          <Link to="/info" className="generate-btn">
            Generate
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
