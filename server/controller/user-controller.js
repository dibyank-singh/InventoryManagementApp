
import User from "../model/user-schema.js"

export const usersignup = async (req, res) => {
    try {
        const exist= await User.findOne({email:req.body.email})
        if(exist){
            return res.status(401).json({message:"Email already exist"})
        }
        const user = req.body;
        const newUser = new User(user)
        await newUser.save();
        res.status(200).json({ message: user })
    } catch (err) { 

    }
}

export const userlogin =async (req, res)=>{
   try{
    
        const email=req.body.email;
        const password=req.body.password;

     let user= await User.findOne({email:email ,password:password});
      if(user){
        return res.status(200).json(`${email} login successfull`)
      }else{
        return res.status(401).json("invalid login")
      }
   
    }catch(err){
      res.status(500).json("error", err.message)
    }

  

}
