import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoComponent from '../components/TodoComponent';

import { db } from '../config';
let todosRef = db.ref('/todos');


export default class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    todosRef.on('value', snapshot => {
      let data = snapshot.val();
      let todos = Object.values(data);
      this.setState( { todos } );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.length > 0 ? (
          <TodoComponent todos={this.state.todos} />
        ) : (
            <Text>No todos</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});