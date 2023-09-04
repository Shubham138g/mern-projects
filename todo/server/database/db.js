import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const Connection = () => {



    const MONGO_URL = `mongodb+srv://${username}:${password}@cluster0.6efrmtj.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("database connected successfully");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("database not connected");
    })
    mongoose.connection.on('error', () => {
        console.log("error while connecting to the database", error.message);
    })

}

export default Connection;
