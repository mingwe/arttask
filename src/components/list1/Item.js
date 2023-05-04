import React from 'react'
import './styles.scss'
export const Item = ({text, href = '#'}) => {
  return (
    <li>
      <a href={href}>
        {text}
      </a>
    </li>
  )
}