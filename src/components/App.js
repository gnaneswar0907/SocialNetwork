import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  home,
  success,
  signup,
  userpage,
  messages,
  findfriends,
  requests,
  profilephoto,
  error,
  posts,
  about,
  userPhotos,
  userFriends,
  passwordChange,
  userUpdate
} from "../urls";
import setAuthToken from "./Authentication/setAuthToken";
import PrivateRoute from "../PrivateRoute";
import EntryPage from "./EntryPage";
import HomeFeed from "./NewsFeed/HomeFeed";
import history from "../history";
import SinglePost from "./NewsFeed/CenterFeed/SinglePost";
import Userpage from "./Users/Userpage";
import UserUpdate from "./Users/UserUpdate";
import UserDpModal from "./Users/UserDpModal";
import Messages from "./Messages/Messages";
import FindFriends from "./friends/FindFriends";
import FriendRequests from "./friends/FriendRequests";
import ErrorModal from "./ErrorModal";
import UserFriends from "./Users/UserFriends/UserFriends";
import UserAbout from "./Users/about/UserAbout";
import UserPhotos from "./Users/UserPhotos/UserPhotos";
import SuccessModal from "./SuccessModal";
import PasswordChangeModal from "./Users/PasswordChangeModal";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
}

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router history={history}>
          <Switch>
            <Route path={signup} exact component={EntryPage} />
            <Route path={error} exact component={ErrorModal} />
            <Route path={success} exact component={SuccessModal} />
            <PrivateRoute path={home} exact component={HomeFeed} />
            <PrivateRoute path={messages} exact component={Messages} />
            <PrivateRoute path={about} exact component={UserAbout} />
            <PrivateRoute path={userFriends} exact component={UserFriends} />
            <PrivateRoute path={userPhotos} exact component={UserPhotos} />
            <PrivateRoute
              path={`${userUpdate}/:username`}
              exact
              component={UserUpdate}
            />
            <PrivateRoute path={findfriends} exact component={FindFriends} />
            <PrivateRoute path={profilephoto} exact component={UserDpModal} />
            <PrivateRoute
              path={passwordChange}
              exact
              component={PasswordChangeModal}
            />
            <PrivateRoute path={requests} exact component={FriendRequests} />
            <PrivateRoute path={`${posts}/:id`} exact component={SinglePost} />
            <PrivateRoute
              path={`${userpage}/:username`}
              exact
              component={Userpage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
