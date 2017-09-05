import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardSectionContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSectionContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    paddingBottom: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
