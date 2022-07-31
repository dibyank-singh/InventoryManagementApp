import React, { useEffect, useState } from 'react'
import {FormControl, FormGroup, InputLabel,Input, Typography,Button, styled ,Box} from "@mui/material";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {updateProduct} from "../../../Redux/actions/ProductsAction"
// EditProduct Css
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

const EditProduct=()=>{
 const productEdited = useSelector(state => state.editProduct.productEdited)
    const dispatch = useDispatch()
  
     
  useEffect(() => {
    setAddproduct(productEdited)
  }, [productEdited])

    const [addproduct, setAddproduct] = useState(productEdited)
    console.log(addproduct)

    const onvaluechange = (e) => {
        e.preventDefault( )
        setAddproduct({ ...addproduct, [e.target.name]: e.target.value })
        console.log(addproduct)
    }
    
    const Additems = async () =>{
       const res= await dispatch(updateProduct(addproduct))
    //    window.alert("Data Added Successfully")
       console.log(res)
    }

    return (
       <>
        <Formgroupcss>
        <Typography variant="h5">Edit Items</Typography>
        <FormControl>
            <InputLabel>Product Name</InputLabel>
            <Input value={addproduct.name} onChange={(e)=>onvaluechange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Description</InputLabel>
            <Input value={addproduct.description} onChange={(e)=>onvaluechange(e)} name="description"/>
        </FormControl>
        <FormControl>
            <InputLabel>Quantity</InputLabel>
            <Input value={addproduct.quantity} onChange={(e)=>onvaluechange(e)} name="quantity"/>
        </FormControl>
        <FormControl>
            <InputLabel>Price</InputLabel>
            <Input value={addproduct.price} onChange={(e)=>onvaluechange(e)} name="price"/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>Additems()}>Update Items</Button>
        </FormControl>
       
       </Formgroupcss>


       </>
    )
}

export default EditProduct;

// import React from 'react'

// const EditProduct = () => {
//   return (
//     <div>EditProduct he;llloo</div>
//   )
// }

// export default EditProduct