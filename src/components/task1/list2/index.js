import React from 'react'
import { Item } from './Item'
import { Grid } from '@mui/material'

export const List2 = ({itemsList}) => {
  return (
    <div>
      <Grid container>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyle: 'none',
          width: '100%',
          padding: 0,
        }}>
          {itemsList && itemsList.map(item =>
            <Item text={item.data} href={item.href} key={item.id}/>
          )}
        </ul>
      </Grid>
    </div>
  )
}