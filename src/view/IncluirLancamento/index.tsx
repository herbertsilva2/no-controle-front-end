import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import styles from '../IncluirLancamento/styles';
import { consultarConta } from '../../services/api';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const IncluirLancamento = () => {    

    return (    
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <Text style={{color: 'white', padding: 20}}>
                    Valor da transação
                </Text>
                <View style={{justifyContent:"space-between", flexDirection: 'row', paddingRight: 20}}>
                    <Text style={{color: 'white', paddingLeft: 20, fontSize: 30}}>
                        R$ 0,00
                    </Text>
                    <Text style={{color: 'white', paddingLeft: 20, fontSize: 20}}>
                        BRL
                    </Text>
                </View>
                <View style={{
                    borderRadius: 20, backgroundColor: 'white', padding: 10, height: Dimensions.get('screen').height
                }}>
                    <Text>
                        Teste
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>    
    )
}

export default IncluirLancamento;