import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import produitsTab from '../data/produitsDB';
import { v4 as uuidv4 } from 'uuid';

const ModalProduits = ({modalvisible, handleModal, data}) => {
    const[nom,setNom]=useState("");
    const[prix,setPrix]=useState("");
    const[url,setUrl]=useState("");
    const push = (lenom,leprix)=>{
        let nouveauProduit = {
            id: uuidv4(),
            nom: lenom,
            prix: leprix,
            url:"../data/images/1.jpg"
          };
          data.push(nouveauProduit)
          setNom("");
          setPrix("");
          setUrl("")
    }
    return (
        <Modal animationType="slide"
        visible={modalvisible}>
            <View style={styles.modalContainer}>
                <Text>Nom</Text>
                <TextInput onChangeText={(lenom)=>setNom(lenom)}
                placeholder="Inscrivez le nom du produit"/>
                <Text>Prix</Text>
                <TextInput onChangeText={(prix)=>setPrix(prix)}
                placeholder="inscrivez le prix"/>
                <Text>Url</Text>
                <TextInput onChangeText={(url)=>setUrl(url)}
                placeholder="Inscrivez l'url de l'image"/>
                <TouchableOpacity style={styles.btnValider} title="Valider" onPress={()=>{
                    handleModal();
                    push(nom,prix,url)
                }}>
                    <Text>Valider</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ModalProduits;

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor:"yellow",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    btnValider:{
        width:200,
        height: 60,
        backgroundColor:"teal"

    }
})