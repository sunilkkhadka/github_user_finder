import React from "react";
import SearchedUser from "../components/SearchedUser/SearchedUser";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  return (
    <div className="HomePage-container">
      <div className="search-container">
        <SearchForm />
        <SearchedUser />
      </div>
    </div>
  );
};

export default HomePage;
