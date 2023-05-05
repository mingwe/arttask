import React from 'react'

export const Item = ({id, price, currency}) => {
  return (
    <div>
      {id}, {price}, {currency}
    </div>
  )
}