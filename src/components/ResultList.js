import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';
const ResultList = ({title, results, navigation}) =>{

    if(!results.length){
        return null;
    }
    return(
        <View style={style.container}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result)=>result.id}
            data={results}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:15
    }
})

export default withNavigation(ResultList);