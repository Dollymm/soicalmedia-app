import React, { useState } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header'
import Footer from './component/Footer';
import SideBar from './component/SideBar';
import CreatePost from './component/CreatePost';
import PostListProvider from './store/postlist-store';
// import Card from './component/Card';
import PostList from './component/PostList';

const App = () => {
   const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className='app-container'>
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
    <div className='content'>
      <Header/>
     {selectedTab==='Home'?(<PostList></PostList>):(<CreatePost/>)}
      
    
      <Footer/>

      </div>
      </div>
      </PostListProvider>
    
  )
}

export default App