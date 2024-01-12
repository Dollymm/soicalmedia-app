import React from "react";

const Welcome = ({onGetPostsClick}) => {
  return (
    <center className="welcome-message">
      <h1>There is no posts</h1>
      <button type="button" className="btn btn-primary"
      onClick={onGetPostsClick}>
        get post from Server
      </button>
    </center>
  );
};

export default Welcome;
