import React, { useContext } from 'react'
import Card from './Card'
import { PostList as PostListData } from '../store/postlist-store'

const PostList = () => {
  const {postList}=useContext(PostListData)
  return (
    <>
    {postList.map((post)=>

    <Card key={post.id} post={post}/>)}
        {/* <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
    </>
  )
}

export default PostList