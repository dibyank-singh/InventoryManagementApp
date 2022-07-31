import React from 'react'
import { useSelector } from 'react-redux'
import {Box} from "@mui/material"

import Table from './Table'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'


const AllItems = () => {
    const product = useSelector(state => state.editProduct)

    return (
        <div>
            {
                product.isEditing
                    ? <EditProduct />
                    : <AddProduct />
            }
            {/* <EditProduct/>
            <AddProduct/> */}
            <Box style={{ marginTop: 40 }}>
                <Table />
            </Box>
        </div>
    )
}

export default AllItems;