import { createContext, useReducer } from "react";

export const PostList=createContext({
    postList:[],
    addpost:()=>{},
    deletePost:()=>{},
});
const postListReducer=(currentPostList,action)=>{
    return currentPostList;

}
const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addpost=()=>{

    }
    const deletePost=()=>{

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
