import React, {useState,useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
import {ListItem} from './components'
import {AddTODO} from './components'
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [itemsNum,setItemsNum]=useState(0);
  const [list,setList]=useState([]);

  const AddItem=(text)=>{
    if(text){
        setList([...list,{text:text,key:Math.random().toString(), isDone:false}])
        setItemsNum(itemsNum+1)
    }
  }

  const removeItem=(key)=>{
    setList(list.filter(item=>item.key != key))
    setItemsNum(itemsNum-1)
  }

  const checkUnCheckItem=(key)=>{
    setList(list.map(item=>
            item.key===key ? {...item, isDone:!item.isDone} : item)             
    )
  }

//  Use useEffect to track the list state then change the number of items
//  to show only the number of active items.
  useEffect(()=>{
    setItemsNum(list.filter(item=>!item.isDone).length)
    },[list])

  const renderItem=({item})=> <ListItem item={item} 
                                        NormalPress={checkUnCheckItem}
                                        LongPress={removeItem}
                              />


  return (
    <SafeAreaView style={styles.Container}>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{flex:1}}>
                <View style={styles.Header}>
                    <Text style={styles.HeaderTitle}>TODO</Text>
                    <Text style={styles.HeaderNumber}>{itemsNum}</Text>
                </View>
                <View  style={styles.List}>
                    <FlatList
                    testID="list"
                    ListEmptyComponent={
                        <Text style={styles.emptyList}>Your TODO is empty!</Text>
                    }
                    data={list}
                    renderItem={renderItem}/>   
                </View>
                <View style={styles.Footer}>
                    <AddTODO AddItem={(itemText)=>AddItem(itemText)}/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  Container:{
      flex:1,
      backgroundColor:'lightgrey'
  },

  Header:{
      flex:1,
      backgroundColor:'#0003',
      paddingHorizontal:10,
      margin:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:10
  },

  HeaderTitle:{
      fontSize:25,
      fontWeight:'bold',
      color:'purple'
  },

  HeaderNumber:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
  },

  List:{
      flex:12,
      margin:20
  },

  emptyList: {
      alignSelf: 'center',
      color: 'purple',
      fontSize: 24,
  },

  Footer:{
      flex:3,
      marginHorizontal:10
  },
})

export default App;
