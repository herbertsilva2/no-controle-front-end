import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { consultarConta } from '../../services/api';

import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {

    const navigate = useNavigation();

    const [conta, setConta] = useState(0);
    
    useEffect(() => {
        pegarSaldo();
    }, []);

    const pegarSaldo = async () => {  
        let a: number = await consultarConta();    
        setConta(a);        
    }

    const navegarPara = (aba: string): void => {
        navigate.navigate(aba);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardSaldo}>
                    <Text style={styles.textSaldo}>
                        Saldo
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => navegarPara("Home")}>
                            <Text style={styles.textValor}>
                                Contas: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                .format(conta)}
                            </Text>
                        </TouchableOpacity>  
                        <TouchableOpacity onPress={() => navegarPara("Home")}>
                            <Text style={styles.textValor}>
                                Cartão: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                .format(conta)}
                            </Text>
                        </TouchableOpacity>  
                                              
                    </View>
                </View>  
                <View style={styles.cardSaldo}>
                    <Text style={styles.textSaldo}>
                        Segundo Card
                    </Text>
                </View><View style={styles.cardSaldo}>
                    <Text style={styles.textSaldo}>
                        Terceiro Card
                    </Text>
                </View>
                <View style={styles.cardSaldo}>
                    <Text style={styles.textSaldo}>
                        Quarto Card
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>  
    );

}

export default Dashboard;
