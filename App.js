
import { ScrollView, StyleSheet, View } from 'react-native';
import  Header  from './components/Header';
import ListProducts from './components/ListProducts';

export default function App() {
  return (
    <View>
      <Header/>
      <ScrollView>
        <ListProducts/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});
