import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();


const conn = async () => {
    try {
        const MONGO_URL = `mongodb+srv://tonygupta275:SJ0huKQz7xbe2e6K@loginsystem.5di64ac.mongodb.net/l?retryWrites=true&w=majority`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(MONGO_URL, options);
        console.log("database connected successfully");
    }
    catch (error) {
        console.log(`database not connected ${error}`);
    }
}



export default conn;