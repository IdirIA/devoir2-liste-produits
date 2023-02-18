import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import produitsTab from '../data/produitsDB';

const ProductCards = ({produit, data, setData}) => {
    console.log(data)
    const deleteProduct = ()=>{
        let newTab = data.filter((element) => element.id!=produit.id)
        setData(newTab)
    }

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.imgStyle} source={require("../data/images/1.jpg")}></Image>
            <Text>ID : {produit.id}</Text>
            <Text>Nom du produit : {produit.nom}</Text>
            <Text>Prix du produit : {produit.prix}</Text>
            <TouchableOpacity>
                <Text onPress={deleteProduct}>Supprimer {data.url}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductCards;

const styles = StyleSheet.create({
    imgStyle:{
        width:"50%",
        height:100
    },
    cardContainer:{
        borderColor:"black",
        borderWidth:2,
        width:"90%"
    }
})