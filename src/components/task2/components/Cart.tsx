import React from 'react';
import {ProductView} from "../types";
import {CartItem} from "./CartItem.tsx";
import {Total} from "./Total.tsx";
import {Divider} from "@mui/material";

interface CartProps {
    items: ProductView[]
}
export const Cart: React.FC<CartProps> = ({ items }) => {
    return (
        <div>
            {items?.length ? items.map(item => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    currency={item.currency}
                />
            )) : <p>No products selected</p>}
            <Divider sx={{margin: '20px'}}/>
            <Total items={items} />
        </div>
    );
};