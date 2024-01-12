import React, { useContext } from 'react';
import Card from './Card';
import { PostList as PostListData } from '../store/postlist-store';
import Welcome from './Welcome';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && <Welcome onGetPostsClick={handleGetClick} />}
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
