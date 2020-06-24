import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function MaterialButtonViolet1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.login}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 3
  },
  login: {
    color: '#fff',
    fontSize: 14
  }
});

export default MaterialButtonViolet1;
