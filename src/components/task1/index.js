import React from 'react'
import { Box, Typography } from '@mui/material'
import { List1 } from '../list1'
import { List2 } from '../list2'

export const Task1 = () => {

  const itemsList = [
    {
      id: 1,
      data: 'First',
      href: '#first',
    },
    {
      id: 2,
      data: 'Second',
      href: '#second',
    },
    {
      id: 3,
      data: 'Some third text'
    },
  ]

  return (
    <div>
      <Box my={3}>
        <Typography variant={'h4'}>Variant 1, css/scss files</Typography>
        <List1 itemsList={itemsList} />
      </Box>
      <Box my={3}>
        <Typography variant={'h4'}>Variant 2, material styled / sx prop</Typography>
        <List2 itemsList={itemsList} />
      </Box>
    </div>
  )
}