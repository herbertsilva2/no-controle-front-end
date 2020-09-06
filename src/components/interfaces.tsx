export interface ExtratoInterface {
    id: number;
    nome: string;
    estabelecimento: string;
    dataCriacao: string;
    dataPagamento: string;
    valor: number;
    pago: boolean;
    codigoTipoTransacao: number;
    nomeTipoTransacao: string;
}