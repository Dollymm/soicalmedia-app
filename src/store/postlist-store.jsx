import { createContext, useReducer } from "react";

export const PostList=createContext({
    postList:[],
    addpost:()=>{},
    deletePost:()=>{},
});
const postListReducer=(currentPostList,action)=>{
    let newPostList =currentPostList
    if(action.type==='DELETE_POST'){
        newPostList=currentPostList.filter(post=>post.id !==action.payload.postId)

    }else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currentPostList]
    }
    return newPostList;

}
const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addpost=(userId,postTitle,postBody,reactions,tags)=>{
dispatchPostList({
    type:'ADD_POST',
    payload:{
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reactions:reactions,
        userId:userId,
        tags:tags,
    }
})
    }
    const deletePost=(postId)=>{
        // console.log(`delete post called for :${postId}`)
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postId,

            },
        })
    }
    return < PostList.Provider value={
        {
        postList:postList,
        addpost:addpost,
        deletePost:deletePost,}
    }>{children}</PostList.Provider>

}
const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Going to mumbai',
    body:'hi friens my name is dolly mamgai hope you are doing greate ',
    reactions:12,
    userId:'user-id 12',
    tags:['vacation','mumbai','emjoying']

},
{
    id:'3',
    title:'Going to mumbai',
    body:'hi friens my name is dolly mamgai hope you are doing greate ',
    reactions:1,
    userId:'user-12',
    tags:['vaction','mumbai','enjoying']

}]
 export default PostListProvider;
