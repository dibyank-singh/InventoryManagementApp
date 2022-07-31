import express from "express";
import {usersignup , userlogin} from "../controller/user-controller.js"
import {addingproducts,getallproducts,editingproducts,deleteproducts,updateproduct} from "../controller/products-controller.js"



const router= express.Router();

router.post("/signup",usersignup)
router.post("/login",userlogin)

// Products route 

router.get("/dashbord", getallproducts)
router.post("/dashbord/add", addingproducts)
router.get("/dashbord/:id", editingproducts)
router.delete("/dashbord/:id", deleteproducts)
router.post("dashbord/update/:id", updateproduct)

export default router;