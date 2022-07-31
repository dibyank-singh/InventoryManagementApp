import React from 'react'
import {Box, AppBar, Toolbar,IconButton,Typography,Button} from "@mui/material"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <>
    <Box>
    <AppBar position="static">
        <Toolbar>
          <Link  style={{textDecoration:"none" , color:"inherit"}} to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon />
          </IconButton></Link>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory System
          </Typography>
          {/* <Link style={{textDecoration:"none" , color:"inherit"}} to="/signup">
             <Button  variant='contained'>Login</Button></Link> */}
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar