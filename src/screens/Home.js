import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo App</Text>
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

  text: {

    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#f23657",
    fontSize: 25,
    textAlign: 'left',
    fontWeight: 'bold'

  },

  container: {
    flex: 1,
    backgroundColor: "#f23657",
    justifyContent: "flex-start",
  },

  // divider: {
  //   height: 600
  // },

  button: {
    backgroundColor: 'teal',
    margin: 10,
    marginBottom: 0
  }

})