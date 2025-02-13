import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';

export default function Home() {
  const titulo = 'Cadastro de Produto';

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState(0);
  const [compra, setCompra] = useState(0);
  const [subtitulo, setSubtitulo] = useState('');
  const [descricao, setDesc] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [takenImage, setTakenImage] = useState(null);

  const products = [
    { label: 'Calçado', value: '0' },
    { label: 'Calça', value: '1' },
    { label: 'Camisa', value: '2' },
  ];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setTakenImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        onChangeText={(newNome) => setNome(newNome)}
      />
      <Dropdown
        style={styles.dropdown}
        data={products}
        labelField="label"
        valueField="value"
        placeholder="Categoria"
        value={selectedItem}
        onChange={(item) => setSelectedItem(item.value)}
      />
      <View style={styles.containerMedium}>
        <TextInput
          style={styles.inputMedio}
          placeholder="Preço compra"
          keyboardType="numeric"
          onChangeText={(newCompra) => setCompra(newCompra)}
        />
        <TextInput
          style={styles.inputMedio}
          placeholder="Preço Venda"
          keyboardType="numeric"
          onChangeText={(newPreco) => setPreco(newPreco)}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Subtitulo"
        onChangeText={(newSubtitulo) => setSubtitulo(newSubtitulo)}
      />
      <TextInput
        style={styles.inputDesc}
        placeholder="Descrição"
        onChangeText={(newDesc) => setDesc(newDesc)}
      />
      <Button
        title="Tirar uma foto"
        onPress={takePicture}
        color= '#000'
      />
      {takenImage && <Image source={{ uri: takenImage }} style={styles.image} />}
      <Button
        color="#000"
        style={styles.button}
        title="Cadastrar Produto"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  containerMedium: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 8,
    height: 45,
    marginBottom: 12,
    borderRadius: 6,
  },
  inputMedio: {
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    width: 175,
    height: 45,
  },
  inputDesc: {
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 12,
    height: 100,
    marginBottom: 12,
    borderRadius: 6,
  },
  dropdown: {
    height: 45,
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#20232a',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    elevation: 3,
  }
});
