import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../Saldo/styles';
import { consultarConta } from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getSaldo } from '../../slices/contaSlice';


const Saldo = () => {

    const navigate = useNavigation();
    
    // const [conta, setConta] = useState(getSaldo);

    const conta = useSelector(getSaldo);

    
    const dispatch = useDispatch();
    
    useEffect(() => {
        pegarSaldo();
    }, []);

    const pegarSaldo = async () => {  
        // let a: any = await consultarConta(); // Ajustar
        dispatch(consultarConta());
        // setConta(a);        
    }

    return (        
        <View style={styles.mainView}>
            <Text style={styles.mainText}>
                Saldo
            </Text>
            <TouchableOpacity>
                <Text style={styles.textoValor}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                    .format(conta)}
                </Text>
            </TouchableOpacity>
            <View style={styles.espacoBotoes}>
                <TouchableOpacity onPress={() => navigate.navigate("IncluirLancamento")}>
                    <View style={styles.viewBotaoReceita}>
                        <Text style={styles.botaoReceita}>
                            <Icon name="plus" color={"white"} size={15}/> Receita
                        </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigate.navigate("IncluirLancamento")}>
                    <View style={styles.viewBotaoDespesa}>
                        <Text style={styles.botaoDespesa}>
                            <Icon name="minus" color={"white"} size={15}/> Despesa
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Saldo;