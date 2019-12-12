import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoComponent from '../components/TodoComponent';

import { db } from '../config';
let todosRef = db.ref('todos/');


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

  delete(todo) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el != todo)
    }));
    // let matched = todosRef.find(el => el.id === id)

    // todosRef.removeValue((id)=>{
    //   {id}
    // });

    // let name = 'doodoo'

    // let test = todosRef.update(id
    // )
    // alert(test)
  }

  edit(todo) {
    console.log('edit')
  };

  render() {
    return (
      <View style={styles.container}>
        {console.log(this.state.todos)}
        {this.state.todos.length > 0 ? (
          <TodoComponent todos={this.state.todos} _handleDelete={this.delete.bind(this)} _handleEdit={this.edit.bind(this)}/>
        ) : (
            <Text style={styles.noTodos}>No todos</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#cce5c9'
  },

  noTodos: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  }
});