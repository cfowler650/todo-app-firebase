import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';




export default class Home extends Component {
  render() {
    return (
      <View>

        <Button
          title="Add a Todo"
          onPress={()=> this.props.navigation.navigate('AddTodo')} />
        <Button
          title="List of Todos"
          color="green"
          onPress={()=> this.props.navigation.navigate('TodoList')} />
      </View>
    );
  }
}