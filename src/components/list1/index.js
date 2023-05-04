import React from 'react'
import { Item } from './Item'


export const List1 = ({itemsList}) => {
  return (
    <div className={'animated-links'}>
      <ul>
        {itemsList && itemsList.map(item =>
          <Item text={item.data} href={item.href} key={item.id}/>
        )}
      </ul>
    </div>
  )
}