import React from 'react';
import { useDispatch } from 'react-redux'
import { editProduct, deleteProduct } from "../../../Redux/actions/ProductsAction"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from 'react';


const Product = ({ product, index }) => {
    const dispatch = useDispatch()
    const priceSum = product.quantity * product.price
    const navigate = useNavigate()



    return (

        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{'₹'}{product.price}</td>
            <td>{'₹'}{priceSum.toFixed(2)}</td>
            <td>{product.description}</td>
            <td>
                {/* <Link to={`update/${product._id}`}>   <button type='button' className='btn btn-outline-primary btn-sm mr-2' onClick={() => dispatch(editProduct(product._id))}>Edit</button></Link>  */}
                <button type='button' className='btn btn-outline-primary btn-sm mr-2' onClick={() => dispatch(editProduct(product))}>Edit</button>
                <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => dispatch(deleteProduct(product._id))}>Delete</button>
            </td>
        </tr>
    )
}

export default Product;