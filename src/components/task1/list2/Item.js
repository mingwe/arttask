import React from 'react'
import { styled } from '@mui/material'

const StyledLi = styled('li')({
  color: 'darkslategray',
  // padding: 8,
});
const StyledAnchor = styled('a')({
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  color: 'darkslategray',
  margin: '2rem',
  padding: '5px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: 'darkslategray',
    // transition: '0.3s',
    transition: 'opacity 0.5s, transform 0.3s',
    transform: 'translate3d(-100%, 0, 0)',
    opacity: 0,
  },
  '&:hover::after': {
    transform: 'translate3d(0, 0, 0)',
    opacity: 1,
  }
});
export const Item = ({text, href = '#'}) => {
  return (
    <StyledLi>
      <StyledAnchor href={href}>
        {text}
      </StyledAnchor>
    </StyledLi>
  )
}