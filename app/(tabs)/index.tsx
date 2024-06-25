import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [resultado, setResultado] = useState('');
  const [laranja, setLaranja]     = useState(0);
  const [caminhao, setCaminhao]   = useState(0);

  const caminhoes = 'Quantos caminhões a fazenda possui?';
  const laranjas  = 'Quantos alqueires a fazenda possui?';
  const titulo    = 'Exercicio N° 1';

  const qntdCaminhoes = () => {
    if (caminhao > 0 && laranja > 0) {
      const qntdNecessaria = Math.ceil((laranja * 250) / (caminhao * 18));
      setResultado(`${qntdNecessaria} caminhões necessários para transportar todas as laranjas.`);
    } else {
      setResultado('Informe a quantidade de caminhões e alqueires.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.text}>{caminhoes}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade de caminhões"
          onChangeText={newCaminhao => setCaminhao(newCaminhao)}
        />
       <Text style={styles.text}>{laranjas}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade de alqueires"
          onChangeText={newLaranja => setLaranja(newLaranja)}
        />
        <Button color="#000" title="Fazer o calculo" onPress={qntdCaminhoes} />
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
