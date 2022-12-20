import { Stack } from '@mui/system'
import React from 'react'
import SearchBar from './SearchBar'

import './css/stack.css'
import './css/NavBar_style.css'
import { logo } from './utils/const'


const Navbar = () => {
  return (
    <Stack direction='row' spacing={2}  m={0} p={2} bgcolor='#3c3d3d' justifyContent="space-between" >
      <img src={logo} alt="youtube" className='youtube_logo' />
      <SearchBar /> 
       
     
    </Stack>
  )
}

export default Navbar