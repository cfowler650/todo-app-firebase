import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';

import { db } from '../config';

let todosRef = db.ref('/todos');

getTodosArrayLength = () => {
  let thisLength = 0
  todosRef.on('value', snapshot => {
      let data = snapshot.val();
      let todos = Object.values(data);
      let length = todos.length;
      thisLength = length;
    });

  return thisLength;
}

let addTodo = (todo) => {
  todosRef.push( {
    name: todo
  });
  console.log(`Added Todo to DB => { name: ${todo} }`);
};

export default class AddTodo extends Component {
  state = {
    name: '',
    todos: []
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    let notEmpty = this.state.name;


    if (notEmpty) {
        addTodo(this.state.name);
        Alert.alert('Todo saved successfully');
    } else {
        Alert.alert('Todo can not be empty!');
    }

  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Add Todo</Text>
        </View>
        <TextInput style={styles.todoInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#cce5c9'
  },
  title: {

    fontSize: 25,
    textAlign: 'center'
  },

  titleContainer: {
    margin: 20
  },

  todoInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
