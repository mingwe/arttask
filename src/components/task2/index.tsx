import React, {useState} from 'react';
import data from './task2.json'
import {ProductsList} from "./components/ProductsList.tsx";
import {Container, Grid} from "@mui/material";
import {Cart} from "./components/Cart.tsx";
export const Task2: React.FC = () => {

    const products = data.data
    const [selectedProducts, setSelectedProducts] = useState([])

    const toggleItem = (item) => {
        if (selectedProducts.some(el => el.id === item.id)) {
            setSelectedProducts(selectedProducts.filter(el => el.id !== item.id))
        }
        else {
            setSelectedProducts([...selectedProducts, item])
        }
    }

    return (
        <Container>
            <Grid container spacing={5} py={5}>
                <Grid item xs={12} md={6}>
                    <ProductsList items={products} onToggle={toggleItem}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Cart items={selectedProducts}/>
                </Grid>
            </Grid>
        </Container>
    );
};