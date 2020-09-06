import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from "react-native";
import styles from './styles';
import { consultarExtrato } from '../../services/api';
import { ExtratoInterface } from '../../components/interfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

const Extrato = () => {

    const [extrato, setExtrato] = useState([
        {
            id: 0,
            dataCriacao: "",
            dataPagamento: "",
            valor: 0,
            pago: false,
            codigoTipoTransacao: 0,
            nomeTipoTransacao: ""
        }
    ]);

    useEffect(() => {
        pegarExtrato();
    }, []);

    const pegarExtrato = async () => {
        let a: ExtratoInterface[] = await consultarExtrato();
        setExtrato(a);
    }

    const definirStyle = (item: any): Object => {
        let s = {}
        if(item.codigoTipoTransacao === 1) {
            s = { color: "#3ADF00", padding: 15 };
        } else {
            s = { color: "red", padding: 15 };
        }
        return s;
    }

    const renderItem = ({item}: any) => {
        let s = definirStyle(item);

        return (
                <View style={styles.viewExtrato}>
                    <TouchableOpacity style={styles.touchableExtrato}>    
                        <View>
                            <Text style={s}>
                                {item.nome}
                            </Text>            
                            <Text style={styles.textExtratoLeft}>
                                {item.dataCriacao}
                            </Text>                            
                        </View>
                        <View>
                            <Text style={s}>
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(item.valor)}
                            </Text>                        
                        </View>

                    </TouchableOpacity>
                </View>
            )
        
    }
    

    return (        
        <View style={styles.mainView}>
            <Text style={styles.mainText}>
                Extrato
            </Text>            
            <View>
                <FlatList
                    data={extrato}
                    renderItem={renderItem}>
                </FlatList>
            </View>
        </View>
    );
}

export default Extrato;