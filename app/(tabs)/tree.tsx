import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
    const tituloDinheiro = 'Conversão de valores';
    const qntdDinheiro   = 'Qual o valor a ser convertido?';
    const qntdEuro       = '5.79';
    const qntdDolar      = '5.39';
    const qntdLibras     = '6.84';
    const [valor, setValor]         = useState('');
    const [resultado, setResultado] = useState('');

    const converterValores = () => {
        const qntdEuroFloat   = parseFloat(qntdEuro);
        const qntdDolarFloat  = parseFloat(qntdDolar);
        const qntdLibrasFloat = parseFloat(qntdLibras);
            if(valor > 0) {
            }else {
        }
    };

  return (
    <>
      <Stack.Screen options={{ title: 'Exercicio Tres' }} />
      <View style={styles.container}>
         <View style={styles.container}>
                <Text style={styles.title}>{tituloDinheiro}</Text>
                <Text style={styles.text}>{qntdDinheiro}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor desejado em REAIS!"
                    onChangeText={newValor => setValor(newValor)}
                />
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholder={qntdDolar}
                    onChangeText={newValor => setValor(newValor)}
                />
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholder={qntdEuro}
                    onChangeText={newValor => setValor(newValor)}
                />
                <TextInput
                    editable={false}
                    style={styles.input}
                    placeholder={qntdLibras}
                    onChangeText={newValor => setValor(newValor)}
                />

        <Button color="#000" title="Fazer a Conversão" onPress={converterValores} />
        {resultado && <Text style={styles.result}>{resultado}</Text>}
      </View>
      </View>
    </>
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
