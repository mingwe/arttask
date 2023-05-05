import React from 'react'
import {ProductView} from "../types";
import {Product} from "./Product.tsx";
import {Grid} from "@mui/material";

interface ItemListProps {
    items: ProductView[]
}

export const ProductsList: React.FC<ItemListProps> = ({items, onToggle}) => {
    return (
        <Grid container spacing={2}>
            {items && items.map(item => (
                <Grid item xs={4} key={item.id}>
                    <Product
                        id={item.id}
                        price={item.price}
                        currency={item.currency}
                        onToggle={onToggle}
                    />
                </Grid>
            ))}
        </Grid>
    );
};