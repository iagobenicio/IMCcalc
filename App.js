import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function App(){

  const [peso,setPeso] = React.useState('')
  const [altura,setAltura] = React.useState('')
  const [resultadovalue,setResultadov] = React.useState('-')
  const [resultado,setResult] = React.useState('resultado')
  function calcImc(){
    var resultpa = peso / (altura * altura);
    resultpa = resultpa.toFixed(2);
    setResultadov("Seu IMC: "+resultpa);
    if(resultpa < 18.5){
      setResult("Você está abaixo do peso")
    }else{
      if(resultpa >= 18.5 && resultpa <= 24.9){
        setResult("Você está no peso normal")
      }else{
        if(resultpa >= 25 && resultpa <= 29.9){
          setResult("Você está com sobrepeso")
        }else{
          if(resultpa >= 30 && resultpa <= 34.9){
            setResult("Você está com obesidade 1 ")
          }else{
            if(resultpa >= 35 && resultpa <= 39.9){
              setResult("Você está com obesidade 2")
            }else{
              setResult("Você está com obesidade 3")
            }
          }
        }
      }
    }
  }
  return (

    <View style={styles.container}>
      <View style={styles.containerinput}>
            <View style={styles.title}>
                <Text style={styles.titlefrist}>Calc</Text>
                <Text style={styles.titlesecond}>IMC</Text>
            </View>
          <TextInput
            value={altura}
            placeholder="Digite sua altura"
            keyboardType='numeric'
            onChangeText={ (altura) => setAltura(altura)}
            style={styles.input}
            placeholderTextColor="white"
          />
          <TextInput
            value={peso}
            placeholder="Digite seu peso"
            keyboardType='numeric'
            onChangeText={ (peso) => setPeso(peso)}
            style={styles.input}
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.bottomstyle} onPress={calcImc}>
            <Text style={{color:'white'}}>Calcular</Text>
          </TouchableOpacity>
      </View>
        <View style={styles.resultcontainer}>
            <Text style={styles.resultvalue}>{resultadovalue}</Text>
            <Text style={styles.result}>{resultado}</Text>
        </View>
     </View>
    )
  }

  const styles = StyleSheet.create({
    title:{
      marginBottom: 60,
      flexDirection: 'row'
    },
    titlefrist:{
      color: 'white',
      fontSize: 23,
      fontStyle: 'italic',
      fontFamily: 'sans-serif-thin'
    },
    titlesecond:{
      color: 'white',
      fontSize: 23,
      fontFamily: 'sans-serif-condensed'
    },
    result:{
      fontSize: 18,
      color: "white"
    },
    resultvalue:{
      fontSize: 20,
      color: 'white',
      paddingBottom: 30
    },
    container: {
      backgroundColor: '#20B2A9',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerinput: {
      justifyContent: 'center',
      backgroundColor: "#20B2A9",
      height: '70%',
      width: '100%',
      alignItems: 'center'
    },
    resultcontainer: {
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#20B2A0',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -30,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      
      elevation: 35,
    },
    input: {
      marginBottom: '10%',
      width: '90%',
      backgroundColor: '#20B2A1',
      borderColor: '#20B2A1',
      color: 'white',
      borderWidth: 2,
      borderRadius: 5,
      height: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.50,
      shadowRadius: 11,
      elevation: 15,
      paddingLeft: 5,

    },
    bottomstyle: {
      backgroundColor: '#20B2A1',
      borderColor: '#20B2A1',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.50,
      shadowRadius: 11,
      elevation: 15,
    }
  })

