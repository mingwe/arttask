import React from 'react';
import {IProduct} from "../types.ts";

export const CartItem: React.FC<IProduct> = ({id, price, currency}) => {
    return (
        <div>
            <p><b>ID: {id}</b>, {price} {currency}</p>
        </div>
    );
};