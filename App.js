import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View ,TouchableOpacity,TextInput,Alert} from 'react-native';
import { useState,useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [vicc,setVicc]=useState("")
  const[adatok,setAdatok]=useState([])
  const[szoveg,setSzoveg]=useState("")

  const tomb=[
     {
      "szoveg":"Mit mond a fa, amikor kivágják?Ez fáj!",
      "tipus":"favicc"
     },
     {
      "szoveg":"Miért késik mindig a politikus? Mert mindent megígért, csak az időt nem.",
      "tipus":"Politikai viccek"
     },
     {
      "szoveg":"Miért visz a szőke nő létrát a boltba?Mert a felirat szerint az árak a padlón vannak!",
      "tipus":"Szökenős viccek"
     },
     {
      "szoveg":"Mi az? Kicsi, sárga, és veszélyes? Egy kiskacsa, aki tud karatézni.",
      "tipus":"Talányos viccek"
     },
     {
      "szoveg":"Hogy hívják a macskát, akinek nincs szeme? Macska",
      "tipus":"Antiviccek"
     }
  ] 

  const sorsol=()=>{
    let veletlen=Math.floor(Math.random()*tomb.length)
    //alert(veletlen)
    //alert.alert(tomb [veletlen].szoveg)
    setVicc(tomb[veletlen].szoveg)
  }

  const letoltes=async ()=>{
      let x=await fetch("https://api.chucknorris.io/jokes/random")
      let y=await x.json()
      setAdatok(y)
  }

  


  useEffect(()=>{
    sorsol()
    letoltes()

   
  },[])



  function gombnyomas(){
    Alert.alert("Üdvözlet",`Hello ${szoveg}!`)
  }


  return (
    <ImageBackground source={require("./hatter.jpg")} style={styles.hatterKep}>
  <View style={styles.container}>
      <View style={{flex: 1,}} >
      <TouchableOpacity style={styles.button} onPress={()=>sorsol()}>
      <Text style={{fontSize:20, color:"feher",fontWeight:'bold',}}>{vicc}</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 2,}} ><TouchableOpacity style={styles.button} onPress={()=>sorsol()}>
      <Text style={{fontSize:20, color:"feher"}}>{adatok.value}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={setSzoveg}
        placeholder='Neved'
        value={szoveg}/>
      
        <View style={{flex: 1,}} >
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>gombnyomas()}>
      <Text style={{fontSize:20, color:"feher",fontWeight:'bold',}}>Üdvözlet</Text>
      </TouchableOpacity>
    </View>
  </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding:40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  gomb:{
    margin:20
  },
  narancs:{
    fontSize:20,
    color:"white"
    
  },
  hatterKep:{
    resizeMode:"cover",
    justifyContent:"center",
    flex:1

  },
  feher:{
    fontSize:20,
    color:"white"
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft:50,
    marginright:50,
    borderRadius:10
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"grey"
  },

  
  
});



