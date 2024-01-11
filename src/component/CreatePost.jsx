import React, { useContext, useRef } from "react";
import {PostList} from "../store/postlist-store";

const CreatePost = () => {
  const {addpost}=useContext(PostList)
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postBodyElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags= tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postBodyElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

addpost(userId,postTitle,postBody,reactions,tags)

  }
  return (
    <form className="create-post " onClick={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your Id here</label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
         
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">post title</label>
        <input
          type="text"
        ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="how's you feeling today"
         
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">post Content</label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it !!"
         
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input
          type="text"
        ref={reactionsElement}
          className="form-control"
          id=" reactions"
          placeholder="How many people reacted to your post"
         
        />
       
      </div>
  
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags here</label>
        <input
          type="text"
        ref={tagsElement}
          className="form-control"
          id=" tags"
          placeholder="Please your tags"
         
        />
       
      </div>
  
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
