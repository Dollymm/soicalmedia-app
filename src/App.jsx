import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header'
import Footer from './component/Footer';
import SideBar from './component/SideBar';

const App = () => {
  return (
    <>
    <SideBar></SideBar>
      <Header/>
      <Footer/>
    </>
  )
}

export default App