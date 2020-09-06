import React from 'react';
import { View, Text } from "react-native";
import styles from './styles';

const Cartao = () => {   

    return (        
        <View style={styles.mainView}>
            <Text style={styles.mainText}>
                Cartões
            </Text>                        
        </View>
    );
}

export default Cartao;