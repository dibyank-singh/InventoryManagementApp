import mongoose from "mongoose";


const connection = async () => {
    const URL=process.env.Database;
    try {
      const conn = await mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       
      });
      console.log("database connected successfully");
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit();
    }
  };
  
  export default connection;