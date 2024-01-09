import React from 'react';
import { MdDelete } from "react-icons/md";

const Card = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: '30rem' }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete />
    </span>
    </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span class="badge text-bg-success hashtag">
            {tag}
          </span>
        ))}
        <div class="alert alert-primary reaction" role="alert">
  A simple primary alert—check it out!
</div>
      </div>
    </div>
  );
};

export default Card;
