import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from "./Components/topmenu/TopMenu";
import Header from "./Components/header/Header";
import Content from "./Components/content/Content";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
        <Header></Header>
      <div className="container">
        <div className="row pt-5">
          <Content tieude="Content 1" vitri2="order-lg-2" anh="01"></Content>
          <Content tieude="Content 2" vitri2="order-lg-2" anh="02"></Content>
          <Content tieude="Content 3" vitri2="order-lg-2" anh="03"></Content>
          <Content tieude="Content 1" vitri2="order-lg-2" anh="01"></Content>
          <Content tieude="Content 2" vitri2="order-lg-2" anh="02"></Content>
          <Content tieude="Content 3" vitri2="order-lg-2" anh="03"></Content>
          <Content tieude="Content 1" vitri2="order-lg-2" anh="01"></Content>
          <Content tieude="Content 2" vitri2="order-lg-2" anh="02"></Content>
          <Content tieude="Content 3" vitri2="order-lg-2" anh="03"></Content>
        </div>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
