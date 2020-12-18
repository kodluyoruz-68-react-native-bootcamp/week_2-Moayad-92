import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

function ListItem({item ,NormalPress, LongPress}){
    return(
        <TouchableOpacity
        onPress={()=>NormalPress(item.key)}
        onLongPress={()=>LongPress(item.key)}>
        {!item.isDone ? 
            <View style={styles.ItemContainer}>
                <Text style={styles.ItemText}>{item.text}</Text>
            </View>
        : 
            <View style={[styles.ItemContainer,{opacity:0.4}]}>
                <Text style={[styles.ItemText,{textDecorationLine:'line-through'}]}>
                    {item.text}</Text>
            </View>
        }
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    ItemContainer:{
        backgroundColor:'purple',
        padding:10,
        borderRadius:10,
        marginBottom:10,
    },

    ItemText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
})

export {ListItem};