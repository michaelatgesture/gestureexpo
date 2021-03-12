import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
    return(
        <View style={styles.container}>
            <Text>Send Gifts Conveniently for Anyone & Any Occasion</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});