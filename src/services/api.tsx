import { createAsyncThunk } from "@reduxjs/toolkit";

const consultarConta = createAsyncThunk('saldo/listarSaldoRedux', async () => {    
    
    const c: number = await fetch('http://192.168.0.109:3000/conta')
    .then(resp => resp.json())
    .then(json => {
        return json[0].saldoInicial;
    })
    .catch(() => { return 0 });

    return c; 

})

const consultarExtrato = async () => {
    try {
        const c: any = await fetch('http://192.168.0.109:3000/conta')
        .then(resp => resp.json())
        .then(json => {
            return json[0].exercicio.mes['1'].transacoes;
        });

        return c;

    } catch(err) {
        return [];
    } 
}


export { consultarConta, consultarExtrato };