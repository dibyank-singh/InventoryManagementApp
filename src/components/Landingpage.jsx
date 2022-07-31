import React from 'react'
import {Box , Typography, Button ,styled} from "@mui/material"
import { Link } from 'react-router-dom'

const Mainbox=styled(Box)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
&>div {
  padding:15px;
}

`
const Sndbox=styled(Box)`
margintop:109px;
&>button{
  padding:15px;
  
}

`
const Landingpage = () => {
  return (
    <>
    <Mainbox>
        <Box>
            <Typography>
              Welcome to my Inventory System..
            </Typography>
        </Box>
         <Sndbox>
         <Link style={{textDecoration:"none" , color:"inherit"}} to="/login">
             <Button  variant='contained'>Login</Button></Link> 
          <Link style={{textDecoration:"none" , color:"inherit"}} to="/signup">
             <Button  variant='contained'>SignUp</Button></Link>
         </Sndbox>
    </Mainbox>
    </>
  )
}

export default Landingpage;