import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.item}>
      <View style={styles.textView}>
        <View>
          <Text>Name:</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.name}</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <View>
          <Text>Bank name:</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.bank_name}</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <View>
          <Text>Transfer type:</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.transfer_type}</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <View>
          <Text>Reference number:</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.reference_number}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    marginVertical: 40,
    width: 355,
    height: 74,
    flexDirection: 'column',
  },
  textView: {flexDirection: 'row'},
  text: {marginLeft: 8},
});

export default Details;
