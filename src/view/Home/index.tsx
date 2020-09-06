import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import Saldo from '../Saldo';
import Extrato from '../Extrato';
import Cartao from '../Cartao';

const Home = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <Saldo></Saldo>
                <Extrato></Extrato>
                <Cartao></Cartao>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;