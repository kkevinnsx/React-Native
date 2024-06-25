import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [resultado, setResultado] = useState('');
  const [nome, setNome]           = useState(0);
  const [valor, setValor]         = useState(0);

  const nomeProduto  = 'Qual o nome do produto?';
  const valorProduto = 'Qual o valor do produto?';
  const titulo       = 'Exercicio N° 2';

  const calcValor = () => {
    const valorFloat = parseFloat(valor);
    if (valorFloat > 0) {
      const valorFinal = Math.ceil(valorFloat + (valorFloat * 0.5));
      setResultado(`o produto ${nome} terá o valor de: ${valorFinal}`);
    } else {
      setResultado('Informe o nome e valor do produto.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.text}>{nomeProduto}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          onChangeText={newNome => setNome(newNome)}
        />
        <Text style={styles.text}>{valorProduto}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor do produto"
          onChangeText={newValor => setValor(newValor)}
        />
        <Button color="#000" title="Fazer o calculo" onPress={calcValor} />
        {resultado && <Text style={styles.result}>{resultado}</Text>}
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
