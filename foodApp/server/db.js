import mongoose from "mongoose";

const MONGOURL=`mongodb+srv://tonygupta275:SJ0huKQz7xbe2e6K@loginsystem.5di64ac.mongodb.net/?retryWrites=true&w=majority`;

const conn=()=>{
    try {
        mongoose.connect(MONGOURL)
        console.log('db connected');
        
    } catch (error) {
        console.log('db not conneted',error);
    }

}

export default conn;