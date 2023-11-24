import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
        <View style={estilo.titulo}>
          <Text style={estilo.lblGrande}>LUCIANA</Text>
        </View>
        <TextInput maxLength={3} style={estilo.inp} placeholder= 'Digite o valor...'></TextInput>
        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.botaoTexto}>OK</Text>
        </TouchableOpacity>
        <Image style={estilo.resistor} source={require('./imagem/resistor.png')} />
        <View style={estilo.c1}></View>
        <View style={estilo.c2}></View>
        <View style={estilo.c3}></View>
        <View style={estilo.c4}></View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 60,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '600px',
    height: '600px',
    borderRadius: '20px',
  },
  resistor: {
    width: 170,
    height: 98,
    marginTop: '70px',
  },
  titulo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '20px',
  },
  lblGrande: {
    color: 'white',
    fontSize: '30px',
  },
  inp: {
    backgroundColor: 'white',
    borderRadius : '5px',
    border: 'solid blue',
  },
  botao: {
    marginTop: '20px',
    backgroundColor: "blue",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 42
  },
  botaoTexto: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  c1: {
    position: 'relative',
    backgroundColor: 'black',
    marginTop : '-97px',
    marginRight: '95px',
    width: '10px',
    height: '53px',
  },
  c2: {
    position: 'relative',
    backgroundColor: 'black',
    marginTop : '-47.5px',
    marginRight: '26px',
    width: '10.5px',
    height: '43px',
  },
  c3: {
    position: 'relative',
    backgroundColor: 'black',
    marginTop : '-43px',
    marginLeft: '26px',
    width: '10px',
    height: '43px',
  },
  c4: {
    position: 'relative',
    backgroundColor: '#FFD700',
    marginTop : '-48.5px',
    marginLeft: '95px',
    width: '10px',
    height: '53px',
  },
});
