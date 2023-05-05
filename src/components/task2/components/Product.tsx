import {IProduct} from "../types";
import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

export const Product: React.FC<IProduct> = ({ id, price, currency, onToggle }) => {
    return (
        <Card sx={{ minWidth: 50 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    ID: {id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price: {price} {currency}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant={'contained'} color={'info'} onClick={() => onToggle({id, price, currency})}>Toggle</Button>
            </CardActions>
        </Card>
    );
};