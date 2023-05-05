export type Currency = 'BTC' | 'ETH' | 'USDT'
export interface IProduct {
    id: number;
    price: number;
    currency: Currency;
}

export interface ICartItem extends IProduct {
    selectedCurrency: Currency;
}

export type ProductView = {
    id: number;
    price: number;
    currency: Currency;
}