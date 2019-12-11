import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class TodoComponent extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.todosList}>
        {this.props.todos.map((todo, index) => {
          return (
            <View key={index}>
              <Text style={styles.todotext}>{todo.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todosList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  todotext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});