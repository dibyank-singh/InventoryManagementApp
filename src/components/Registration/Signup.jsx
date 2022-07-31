import { useState } from "react";
import { adduser } from "../../service/Api"
import { Link } from "react-router-dom"
// import {useHistory} from "react-router-dom"
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled, Box } from "@mui/material";

const Formgroupcss = styled(FormGroup)`
width:40%;
margin:6% auto 0 auto;
&> div {
    margin-top:14px;      
}

`


const Signup = () => {


    const initialval = {
        name: "",
        email: "",
        phone: "",
        password: ""
    }

    const [users, setUsers] = useState(initialval)

    const onvaluechange = (e) => {
        e.preventDefault()
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users)
    }
    const usersignup = async () => {
        let res = await adduser(users)
        console.log(res)
        //    if(res){
        //     history.push("/dashbord")
        //    }
    }

    return (
        <>

            <Formgroupcss>
                <Typography variant="h5">User SignUp</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onvaluechange(e)} name="name" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onvaluechange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onvaluechange(e)} name="phone" />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input onChange={(e) => onvaluechange(e)} name="password" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => usersignup()}>SignUp</Button>
                </FormControl>
                <Box>
                    <Typography> Already a user ? <Link style={{ textDecoration: "none" }} to="/login">Login Here</Link></Typography>
                </Box>
            </Formgroupcss>

        </>
    )
}
export default Signup;