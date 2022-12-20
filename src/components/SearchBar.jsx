import { Button, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { border } from '@mui/system';
const SearchBar_style = {
  backgroundColor:'rgb(92,92,92)',
  color:'white',
  padding:'10px 30px',
  paddingLeft:'10px',
  borderRadius:'2rem',
  margin:'auto',
  border:'0'
}

const Search_paper = {
  backgroundColor:'rgb(92,92,92)',
  width:'auto',
  height:'fit-content',
  position:'relative',
  borderRadius:'2rem',
}

const SearchBar = () => {
  return (
    <Paper style={Search_paper}>
      <input style={SearchBar_style} placeholder='Search..'/>
      <Button  style={{color:'red', borderRadius:'0 2rem 2rem 0' }}>
        <SearchIcon  style={{color:'red'}} />
      </Button>

    </Paper>
    
    

    
  )
}

export default SearchBar