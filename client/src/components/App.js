import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage";
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Container fluid>
        <NavBar />
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, true)} />
          <Route exact path="/watch/:videoID" component={Auth(DetailVideoPage, null)} />
        <Footer />
    </Container>
  );
}

export default App;
