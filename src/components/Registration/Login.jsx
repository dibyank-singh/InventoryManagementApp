import {FormControl, FormGroup, InputLabel,Input,Box, Button, Typography, styled  } from "@mui/material";
import {Link} from "react-router-dom"
import {useState} from "react"
import {callinguser} from "../../service/Api.js"
import { useNavigate } from 'react-router-dom';



const Formgroupcss=styled(FormGroup)`
width:40%;
margin:6% auto 0 auto;
&> div {
    margin-top:14px;      
}

`

const Login=()=>{

    const nevigate = useNavigate()
    const initialval={
        email:"",
        password:"",
    }

    const [ users , setUsers]=useState(initialval)
    const onvaluechange=(e)=>{
        e.preventDefault()
        setUsers({...users , [e.target.name]:e.target.value})
        console.log(users)
     }

    const userlogin=async()=>{
      const resdata= await callinguser(users)
      console.log(resdata)
      window.alert("User login successfull")
      if(resdata){
        nevigate("/dashbord" )
      }
         
    }
    return(
   <>
    <Formgroupcss>
     <Typography>User Login</Typography>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onvaluechange(e)} name="email"/>
    </FormControl>
    <FormControl>
        <InputLabel>Password</InputLabel>
        <Input onChange={(e)=>onvaluechange(e)} name="password"/>
    </FormControl>
    <FormControl>
        <Button variant="contained" onClick={()=>userlogin()}>Login</Button>
    </FormControl>
    <Box>
        <Typography> New Customer ? <Link style={{textDecoration:"none" }} to="/signup">Register Here</Link></Typography>
    </Box>
   </Formgroupcss>

   </>
    )
}
export default Login;