import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
    const tituloDinheiro = 'Conversão de valores';
    const qntdDinheiro   = 'Qual o valor a ser convertido?';
    const [qntdEuro,   setQntdEuro]  = useState('5.90');
    const [qntdDolar,  setQntdDolar] = useState('5.52');
    const [qntdLibras, setQntdLibras]= useState('6.97');
    const [valor, setValor]          = useState('');
    const [resultado, setResultado]  = useState('');

    const converterValores = () => {
         const qntdEuroFloat   = parseFloat(qntdEuro);
         const qntdDolarFloat  = parseFloat(qntdDolar);
         const qntdLibrasFloat = parseFloat(qntdLibras);
            if(valor > 0) {
                const resultEuro   = Math.ceil(valor / qntdEuroFloat);
                const resultDolar  = Math.ceil(valor / qntdDolarFloat);
                const resultLibra  = Math.ceil(valor / qntdLibrasFloat);
                setResultado(`Euro: ${resultEuro} € \nLibra: ${resultLibra} £ \nDolar: ${resultDolar} US$`)
            }else{
                setResultado('Insira um valor valido');
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
                    keyboardType="numeric"
                />

                <Text style={styles.text}>{'Dolar'}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={qntdDolar}
                    keyboardType="numeric"
                    onChangeText={newDolar => setQntdDolar(newDolar)}
                />

                <Text style={styles.text}>{'Euro'}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={qntdEuro}
                    keyboardType="numeric"
                    onChangeText={newEuro => setQntdEuro(newEuro)}
                />

                <Text style={styles.text}>{'Libra'}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={qntdLibras}
                    keyboardType="numeric"
                    onChangeText={newLibras => setQntdLibras(newLibras)}
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
  padding: 1,
  fontWeight: 'bold',
  },

  result: {
  fontSize: 20,
  fontWeight: 'bold',
  paddingTop: 5,
  }
});
