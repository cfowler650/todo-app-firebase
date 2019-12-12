import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

import { db } from '../config';


export default class TodoComponent extends Component {

  _handleDelete(todo) {
    this.props._handleDelete(todo);
  }

  _handleEdit(todo) {
    this.props._handleEdit(todo);
  }

  render() {
    return (
      <View style={styles.todosList}>
        <View style={styles.dividerTop}>
        <Text style={styles.dividerTopText}>My Todos</Text>
        </View>
        {this.props.todos.map((todo, index) => {
          return (
            // <View key={todo.id}>
            //   <Text onPress={this.props.handlePress} style={styles.todotext}>{todo.name}</Text>
            // </View>
            <>

            <View style={styles.todoContainer} key={todo.index}>
              <Text style={styles.todoText}>{todo.name}</Text>
              <View style={styles.buttonGroup}>
                <Button title="Edit" onPress={this._handleEdit.bind(this, todo)} />
                <Button title="Delete" onPress={this._handleDelete.bind(this, todo)} />
              </View>
            </View>
            <Text style={styles.divider}></Text>
            </>
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
    justifyContent: 'flex-start'
  },

  todoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },

  todoContainer: {
    borderWidth: 0.5,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10
  },

  buttonGroup: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  divider: {
    height: 3
  },

  dividerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  dividerTopText: {
    fontSize: 35,
    fontWeight: 'bold'
  }

});