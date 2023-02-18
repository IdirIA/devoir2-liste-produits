import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text>NOM APPLICATION ICI</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
headerContainer:{
    height:100,
    backgroundColor:'teal',
    justifyContent:"center",
    alignItems:"center"

}
})