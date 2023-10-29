import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const ResultDetail = ({result}) =>{
    return (
        <View style={style.containerStyle}>
            <Image source={{uri: result.image_url}} style={style.imageStyle}/>
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerStyle:{
        marginLeft:15
    },
    imageStyle:{
        width:250,
        height:140,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    }
})

export default ResultDetail;