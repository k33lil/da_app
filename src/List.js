import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const List = ({navigation}) => {
  const [transactions, setTransactions] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://61769aed03178d00173dad89.mockapi.io/api/v1/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => (
    <Card>
      <CardTitle title={item.name} />
      <CardContent text={item.bank_name} />
      <CardAction separator={true} inColumn={false}>
        <CardButton
          onPress={() => {
            navigation.navigate('Details', {
              item: item,
            });
          }}
          title="Show Details"
          color="#007AFF"
        />
      </CardAction>
    </Card>
  );

  return isLoading ? (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#A9A9A9',
  },
  text: {
    color: '#000',
  },
});

export default List;
