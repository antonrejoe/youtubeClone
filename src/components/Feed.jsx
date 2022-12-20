

import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React , {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import {fetchFromapi} from './utils/fetchFromapi'

const feed_style = {
  
  height:"100vh",
  color:'white'


}


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

   const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromapi(`search?part=snippet=&q${selectedCategory}`)
    .then((data)=> setVideos(data.items) )
  
  }, [selectedCategory])
  

  return (

    <Stack bgcolor="#3d3d3d" style={feed_style} sx={{  flexDirection:{sx:'column' , md:'row'} }}>
     
     <Box sx={{
      height:{ sx:'100vh' , md:'92vh'},
      p:2,
      borderRight: '1px solid #333333 '


     }}>

      <Sidebar
      selectedCategory={selectedCategory}
      setSelectedCategory = {setSelectedCategory}
      />
      <Typography>
        Made with ❤️ by Anton Rejoe
      </Typography>

     </Box>
     
     <Box style={{
      padding:10,
      overflowY:'auto'
     }}>
      <Typography
      variant='h4' 
      fontWeight='semibold' >{selectedCategory}
        
      <span style={{
        padding:2,
        color:'#FC1503'
      }}>Videos</span>
        
      </Typography>
      
      <Videos videos= {videos}/>

     </Box>

    </Stack>

 )
}

export default Feed