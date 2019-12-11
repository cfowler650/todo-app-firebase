import React, { Component } from 'react';
import { View, Fragment, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';

// we will use these two screens later in our AppNavigator
import AddTodo from './src/screens/AddTodo';
import TodoList from './src/screens/TodoList';

const AppNavigator = createStackNavigator(
  {
    Home,
    AddTodo,
    TodoList
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

var FBLoginButton = require('./FBLoginButton');

export default class App extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    console.log('Logged in?', this.state.loggedIn);
  }

  authHandler = (authBooleanValue) => {
    this.setState({
      loggedIn: authBooleanValue
    });
  }

  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <AppContainer />
        ) : (
            <View style={styles.container}>
              <FBLoginButton authHandler={this.authHandler} />
            </View>
          )}
       </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});