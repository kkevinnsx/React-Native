import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Text, TextInput, StyleSheet, View, Button, Alert, Picker} from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  let titulo = 'Cadastro de Produto';

  const [nome, setNome]           = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco]         = useState(0);
  const [compra, setCompra]       = useState(0);
  const [subtitulo, setSubtitulo] = useState('');
  const [descricao, setDesc]      = useState('');

  const produtos = [
    "Calça",
    "Camiseta",
    "Calçado"
  ];

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            onChangeText={newNome => setNome(newNome)}
            keyboardType="numeric"
        />
        <Picker
            selectedValue={categoria}
            onValueChange={(newCategoria) => setCategoria(newCategoria)}
        >{produtos.map((produto, index) =>(
        <Picker.Item key={index} label={version} value={version}/>
        ))}
        </Picker>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  input: {
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
  },

  inputMedio: {
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    width: '50%',
  },

  title: {
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
  paddingTop: 5,
  paddingBottom: 20,
  },

  text: {
  fontSize: 18,
  padding: 8,
  fontWeight: 'bold',
  },

  result: {
  fontSize: 20,
  fontWeight: 'bold',
  paddingTop: 5,
  }
});
