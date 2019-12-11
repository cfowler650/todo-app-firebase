import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
                this.props.authHandler(false);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
                this.props.authHandler(false);
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
                this.props.authHandler(true);
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;