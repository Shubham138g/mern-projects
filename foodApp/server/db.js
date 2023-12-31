import mongoose, { mongo } from "mongoose";

const MONGOURL = `mongodb+srv://tonygupta275:SJ0huKQz7xbe2e6K@loginsystem.5di64ac.mongodb.net/foodorder?retryWrites=true&w=majority`;

const conn = async () => {
    try {
        await mongoose.connect(MONGOURL)
        console.log('db connected');
        const fetch_data = await mongoose.connection.db.collection("food_items");
        const data = await fetch_data.find({}).toArray()
        const foodcategory=await mongoose.connection.db.collection("food_category");
        const catData= await foodcategory.find({}).toArray()
        global.food_items = data;
        global.foodcategory=catData;


    } catch (error) {
        console.log('db not conneted', error);
    }

}

export default conn;