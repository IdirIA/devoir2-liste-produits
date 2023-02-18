import {React, useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import ModalProduits from './ModalProduits';
import ProductCards from './ProductCards';
import produitsTab from '../data/produitsDB'

const ListProducts = () => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const handleModal = ()=>{
        setModalVisibility(!modalVisibility)
    }
    const[data,setData]=useState(produitsTab);

    return (
        <View>
            <TouchableOpacity style={styles.btnAjouter}
            onPress={handleModal}>
                <Text>2-Ajouter un nouveau produit</Text>
            </TouchableOpacity>
            <ModalProduits modalvisible = {modalVisibility} handleModal={handleModal}
            data={data} setData={setData}/>
            <Text>3-Label pour liste</Text>
            <View>
            {data.map((produit,index)=>{
                const cheminImage = produit.url;
                return <ProductCards 
                key={index} 
                produit={produit} 
                data={data} 
                setData={setData} 
                id={index}
                cheminImage={cheminImage}
                />
            })}
            </View>
        </View>
    );
};

export default ListProducts;

const styles=StyleSheet.create({
    btnAjouter:{
        width:200,
        height:40,
        backgroundColor:'green',
        margin:10
    }
})