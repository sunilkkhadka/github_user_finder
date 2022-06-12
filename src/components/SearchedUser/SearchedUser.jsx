import React from "react";
import { useSelector } from "react-redux/es/exports";

import "./SearchedUser.scss";

const SearchedUser = () => {
  const fetchedUserData = useSelector((state) => state.user.userData);

  let rendered = "";
  rendered =
    fetchedUserData.length < 1 ? (
      <></>
    ) : (
      <div className="searched-user-container">
        <h1>Searched user</h1>
        <div className="user-info">
          <img src={fetchedUserData.avatar_url} alt={fetchedUserData.login} />
          <h1>Username : {fetchedUserData.login}</h1>
        </div>
      </div>
    );

  console.log(fetchedUserData);

  return <div className="searched-user">{rendered}</div>;
};

export default SearchedUser;
