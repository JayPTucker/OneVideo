import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Auth from "../hoc/auth";

// ALL THE PAGES WE HAVE IN VIE
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage";
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage";
import SubscriptionPage from "./views/SubscriptionPage/SubscriptionPage";

// ROUTE STATUS:
// null - ANYONE CAN GO INTO THIS PAGE
// true - ONLY LOGGED IN USERS CAN ENTER THIS PAGE
// false - ONLY LOGGED OUT USERS CAN ENTER THIS PAGE

function App() {
  return (
    <Container fluid>
        <NavBar />
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, true)} />
          <Route exact path="/watch/:videoID" component={Auth(DetailVideoPage, null)} />
          <Route exact path="/subscription" component={Auth(SubscriptionPage, true)} />
        <Footer />
    </Container>
  );
}

export default App;
