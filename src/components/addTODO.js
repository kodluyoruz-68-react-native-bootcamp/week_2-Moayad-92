import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function AddTODO({AddItem}){
    const [todoText,setTodoText]=useState(''); 
    return(
        <View style={styles.Container}>
            <TextInput
            testID='input'
            style={styles.Input} placeholder='ADD TODO ...'
            placeholderTextColor='#0005'
            onChangeText={(todoText)=>setTodoText(todoText)}
            />
            <TouchableOpacity
            testID='button'
            style={styles.AddButton}
            onPress={()=>AddItem(todoText)}>
                <Text style={styles.ButtonText}>Add TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({

    Container:{
        flex:1,
        backgroundColor:'#0003',
        padding:10,
        borderRadius:10,
    },
   
    Input:{
        flex:1,
        backgroundColor:'white',
        borderRadius:5,
        fontSize:14,
        marginBottom:5,
        paddingLeft:10,
    },
        
    AddButton:{
        flex:1,
        backgroundColor:'purple',
        borderRadius:5,
        justifyContent:'center',
        marginTop:5,
    },

    ButtonText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
    }    
})

export {AddTODO};

