import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState(null);
  const [ pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((nBill * pct) / 100);
    }
  };

  useEffect(()=>{
    calc();
  },[ pct ]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Calculadora de Gorjeta</Text>
        <TextInput
          value={bill}
          onChangeText={v=>setBill(v)}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Quanto deu a conta?"
        />

        <View style={styles.pctArea}>
        <TouchableOpacity onPress={s=>setPct(5)}>
          <Text style={styles.pctBtns}>5%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={s=>setPct(10)}>
          <Text style={styles.pctBtns}>10%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={s=>setPct(15)}>
          <Text style={styles.pctBtns}>15%</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={s=>setPct(20)}>
          <Text style={styles.pctBtns}>20%</Text>
        </TouchableOpacity>
        </View>        

        <TouchableOpacity style={styles.calcBtn} onPress={calc}>
          <Text style={styles.textBtn}>valor {pct}%</Text>
        </TouchableOpacity>
      </View>
      
      {tip &&(
        <View style={styles.wrapper}>
          <Text style={styles.resultItemTitle}>Valor da conta</Text>
          <Text style={styles.resultItem}>
            R$ {parseFloat(bill).toFixed(2)}
          </Text>

          <Text style={styles.resultItemTitle}>Valor da gorjeta</Text>
          <Text style={styles.resultItem}>R$ {tip.toFixed(2)}  ({pct}%)</Text>

          <Text style={styles.resultItemTitle}>Valor total</Text>
          <Text style={styles.resultItem}>
            R$ {(parseFloat(bill) + tip).toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginBottom: 20,
  },
  pctArea: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    marginBottom: 20
  },
  pctBtns: {
    width: '80%',
    height: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#00f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  calcBtn: {
    width: '30%',
    height: 40,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 40
  },
  textBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  resultItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultItem: {
    fontSize: 17,
    marginBottom: 20,
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
});
