import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: 'https://raw.githubusercontent.com/GabrielBarbxsaaZx999/logogng/main/20231128_085947%201.png'}} style={styles.logo} />
        <View style={styles.searchContainer}>
          <TextInput style={styles.pesquisar} placeholder="  Pesquisar..." />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tudo}>
        <View style={styles.sections}>
          <Text>1</Text>
        </View>
        <View style={styles.sections}>
          <Text>2</Text>
        </View>
        <View style={styles.sections}>
          <Text>3</Text>
        </View>
        <View style={styles.sections}>
          <Text>4</Text>
        </View>
      </View>
      <View style={styles.footer}>
       Todos os direitos reservados@2024
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6c98ee',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 50,
  },
  searchContainer: {
    flex: 1,
    marginLeft: 10,
  },
  pesquisar: {
    height: 30,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#022a79',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 15,
  },
  
  button2: {
    backgroundColor: '#2354b5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  tudo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sections: {
    margin: 20,
    width: '90%',
    borderRadius: 10,
    color: 'black',
    height: 200,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#6c98ee',
    padding: 15,
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;

