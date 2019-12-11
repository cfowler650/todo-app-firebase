import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';

import { db } from '../config';

let addTodo = todo => {
  db.ref('/todos').push({
    name: todo
  });
};

export default class AddTodo extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    console.log(e.nativeEvent.text);
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
        <Text style={styles.title}>Add Todo</Text>
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
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  todoInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
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
