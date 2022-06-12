import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./DisplayData.scss";

const DisplayData = () => {
  const user_data = useSelector((state) => state.user.userData);
  console.log(user_data);
  let renderData = "";

  renderData =
    user_data.length < 1 ? (
      <div className="display-container">
        <div className="user">
          <div className="user-identity">
            <div className="user-image">
              <img
                src="https://images.unsplash.com/photo-1654973406771-357f5c21de68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <h2>John Doe</h2>
            <h3>@johndoe</h3>
          </div>
          <div className="user-socials">
            <div className="followers">
              <h3>20</h3>
              <h4>Followers</h4>
            </div>
            <div className="following">
              <h3>4.5k</h3>
              <h4>Following</h4>
            </div>
            <div className="repository">
              <h3>16</h3>
              <h4>Repositories</h4>
            </div>
          </div>
        </div>
        <div className="other-info">
          <div className="location">
            <h2 className="email">sunil@gmail.com</h2>
            <h2 className="org">Google</h2>
            <h2 className="twitter">@sunil_khada</h2>
            <h2 className="webiste">www.sunil.com</h2>
          </div>
          <div className="bio">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            voluptate voluptatum magni culpa laborum doloribus itaque aut neque
            id, aperiam molestiae ipsa minima blanditiis deserunt velit quae,
            officia illum nesciunt. Quod provident eos a officiis cum, facere
            molestiae dolore doloremque, deserunt dignissimos odit itaque dicta.
            Delectus eius quidem sequi provident ipsum odio. Unde nulla non
            neque minima blanditiis, porro consequatur!
          </div>
        </div>
        <Link to="/" className="back-btn">
          Go Back
        </Link>
      </div>
    ) : (
      <div className="display-container">
        <div className="user">
          <div className="user-identity">
            <div className="user-image">
              <img src={user_data.avatar_url} alt={user_data.login} />
            </div>
            <h2>{user_data.login}</h2>
            <h3>@{user_data.login}</h3>
          </div>
          <div className="user-socials">
            <div className="followers">
              <h3>{user_data.followers}</h3>
              <h4>Followers</h4>
            </div>
            <div className="following">
              <h3>{user_data.following}</h3>
              <h4>Following</h4>
            </div>
            <div className="repository">
              <h3>{user_data.public_repos}</h3>
              <h4>Repositories</h4>
            </div>
          </div>
        </div>
        <div className="other-info">
          <div className="location">
            <h2 className="email">{user_data.email}</h2>
            <h2 className="org">{user_data.company}</h2>
            <h2 className="twitter">{user_data.twitter_username}</h2>
            <h2 className="webiste">{user_data.url}</h2>
          </div>
          <div className="bio">{user_data.bio}</div>
        </div>
        <Link to="/" className="back-btn">
          Go Back
        </Link>
      </div>
    );

  return <div className="info">{renderData}</div>;
};

export default DisplayData;
