
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function Resultado({imc, msg, onLimpar}) {
  return (
    <View style={{marginTop: 16}}>
      <Text style={{fontSize: 24, fontWeight: "bold", color: "blue", textAlign: "center"}}>SEU IMC: {(+imc).toFixed(2)}</Text>
      <Text style={{fontSize: 18, textAlign: "center", color: "red", marginTop: 9, fontWeight: "bold"}}>{msg}</Text>
      <View style={{fontSize: 16, marginTop: 36}}>
        <Button title="LIMPAR" onPress={() => onLimpar()} />
      </View>
    </View>
  );
}

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [msg, setMsg] = useState("");


  function calculaIMC() {
    if (altura !== "" && peso !== "") {
      const naltura = +altura / 100;
      const npeso = +peso;

      const resultado = npeso / (naltura * naltura);
      setImc(resultado);

      if(resultado < 18.5) {
        setMsg("Abaixo do peso recomendado.");
      }
      else if(resultado >= 18.5 && resultado <= 24.9) {
        setMsg("  Peso Normal.");
      }
      else if(resultado >= 25 && resultado <= 29.9) {
        setMsg("SOBREPESO");
      }
      else if(resultado >= 30 && resultado <= 34.9) {
        setMsg("ATENÇÃO   Obesidade Grau I");
      }
      else if(resultado >= 35 && resultado <= 39.9) {
        setMsg("CUIDADO  Obesidade Grau II");
      }
      else if(resultado >= 40) {
        setMsg("ALERTA     Obesidade Grau III");
      }1
    } else {
      setImc("");
      setMsg("");
    }
  }

  function limpar() {
    setAltura("");
    setPeso("");
    setImc("");
    setMsg("");
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20, marginBottom: 10, backgroundColor: "#ff8c00", borderStyle:"solid", padding: 5, borderRadius: 10, width: "70%", marginBottom: 15}}>
        <Text style={{backgroundColor: "#4b0082", fontSize: 21, textAlign: "center", fontWeight: "bold", color: "#a9a9a9"}}>Calcule o seu Indice de Massa Corporal</Text>
      </View>
      <Text style={{ fontSize: 18, marginTop: 9, fontWeight: "bold"}}>DIGITE SUA ALTURA em CM:</Text>
      <TextInput keyboardType="numeric" value={altura} onChangeText={valorAtualizado => setAltura(valorAtualizado)} style={styles.campoTexto} />
      <Text style={{ fontSize: 18, marginTop: 9, fontWeight: "bold"}}>DIGITE SEU PESO:</Text>
      <TextInput keyboardType="numeric" value={peso} onChangeText={valorAtualizado => setPeso(valorAtualizado)} style={styles.campoTexto} />
      <Text style={{ fontSize: 18, marginTop: 9, fontWeight: "bold"}}>ALTURA: {altura} - PESO {peso}</Text>
      <View style={{ marginTop: 16}}>
        <Button disabled={altura === "" || peso === ""} title="CALCULAR IMC" color="red" onPress={calculaIMC} />
      </View>
      {imc !== "" && (
        <Resultado imc={imc} msg={msg} onLimpar={limpar} />
      )}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000cd',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  campoTexto: { fontSize: 18, color:"black", width: 100, height: 40, borderWidth: 1, borderColor: 'blue', textAlign:"center", marginTop: 18, marginBottom: 18, fontWeight: "bold"
  }
  
});
