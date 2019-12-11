import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';

// we will use these two screens later in our AppNavigator
import AddTodo from './src/screens/AddTodo';
import TodoList from './src/screens/TodoList';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}