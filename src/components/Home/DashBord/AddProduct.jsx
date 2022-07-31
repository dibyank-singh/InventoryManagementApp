import React, { useEffect, useState } from 'react'
import {FormControl, FormGroup, InputLabel,Input, Typography,Button, styled ,Box} from "@mui/material";
import {Link} from "react-router-dom"
import Table from "./Table"
import { useDispatch } from 'react-redux'
import {addProducts} from "../../../Redux/actions/ProductsAction"
// Dashbord Css
const Formgroupcss=styled(FormGroup)`
width:40%;
margin:1% auto 0 auto;
&> div {
    margin-top:6px;      
}

`
const textcsc=styled(Typography)`
 fontsize:40px;
 fontweight: 900;
`

const AddProduct=()=>{
    const dispatch = useDispatch()
    const initialval = {
        name: "",
        description: "",
        quantity: 0,
        price: 0,
    }

    const [addproduct, setAddproduct] = useState(initialval)

    const onvaluechange = (e) => {
        e.preventDefault( )
        setAddproduct({ ...addproduct, [e.target.name]: e.target.value })
        console.log(addproduct)
    }
    
    const Additems = async () =>{
       const res= await dispatch(addProducts(addproduct))
    //    window.alert("Data Added Successfully")
       console.log(res)
    }

    return (
       <>
        <Formgroupcss>
        <Typography variant="h5">Inventory Management</Typography>
        <FormControl>
            <InputLabel>Product Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Description</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="description"/>
        </FormControl>
        <FormControl>
            <InputLabel>Quantity</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="quantity"/>
        </FormControl>
        <FormControl>
            <InputLabel>Price</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="price"/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>Additems()}>Add Product</Button>
        </FormControl>
       
       </Formgroupcss>


       </>
    )
}

export default AddProduct;