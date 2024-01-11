import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postlist-store";

const Card = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} class="badge text-bg-success hashtag">
            {tag}
          </span>
        ))}
        <div class="alert alert-primary reaction" role="alert">
          this post reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};

export default Card;
