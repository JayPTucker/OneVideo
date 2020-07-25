import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

import "./LoginSection.css"

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <a href="/login"><b>Sign in</b></a>
        <a href="/register"><b>Sign up</b></a>
      </div>
    )
  } else {
    return (
      <div>
        <button className="logout-btn" onClick={logoutHandler}>Logout</button>
      </div>
    )
  }
}

export default withRouter(RightMenu);

