import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

// so can be imported from /common/index.js as Input
export { Input };
