import React, {useState} from 'react';
import {Currency, ProductView} from "../types";
import {getPriceInCurrency} from "../helpers.ts";
import data from '../task2.json'
import {MenuItem, Select} from "@mui/material";

interface TotalProps {
    items: ProductView[]
}
export const Total: React.FC<TotalProps> = ({items}) => {

    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('BTC')
    const currencies: Currency[] = ["BTC", "ETH", "USDT"]
    const countTotalPrice = () => (
        items.reduce(
            (accumulator, currentValue) => accumulator + getPriceInCurrency(currentValue.price, currentValue.currency, selectedCurrency, data["currencies-pairs"]), 0
        )
    )
    return (
        <div>
            Total: <b>{items.length}</b> items for <b>{countTotalPrice()} </b>
            <Select
                value={selectedCurrency}
                onChange={(val) => setSelectedCurrency(val.target.value)}
            >
                {currencies.map(i => <MenuItem key={i} value={i}>{i}</MenuItem>)}
            </Select>
        </div>
    );
};