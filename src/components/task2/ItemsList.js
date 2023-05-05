import React from 'react'
import { Item } from './Item'

export const ItemsList = ({items}) => {
  return (
    <div>
      list of items
      {items && items.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}