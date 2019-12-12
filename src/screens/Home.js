import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
         <Text style={styles.header}>Todo App</Text>
        </View>

        <Button
          title="New Todo"
          type="solid"
          buttonStyle={styles.button}
          onPress={() => this.props.navigation.navigate('AddTodo')}
        />

        <Button
          title="View Todos"
          type="solid"
          buttonStyle={styles.button}
          onPress={()=> this.props.navigation.navigate('TodoList')} />

        <Text style={styles.divider}> </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerContainer: {
    margin: 20,
    backgroundColor: "#cce5c9",
  },

  header: {
    fontSize: 25,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: "#cce5c9",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20
  },

  button: {
    backgroundColor: 'teal',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 8
  }

})