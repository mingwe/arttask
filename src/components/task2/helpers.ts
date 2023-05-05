import {Currency} from "./types";

export const getPriceInCurrency = (price: number, currencyIn: Currency, currencyOut: Currency, currencies: object) => {
    if (currencyIn === currencyOut) return price;
    const rate = currencies[`${currencyIn}-${currencyOut}`]
    if (!price || !rate) return null;
    return (price * rate)
}