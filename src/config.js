import { config } from "dotenv";
config('.env');

const uri = 'mongodb+srv://aikalpaAdmin:yft0mBaClxkEB8BG@cluster0.pz1ji.mongodb.net/aikalpa'

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI ;

// aikalpaAdmin
// yft0mBaClxkEB8BG
// mongodb+srv://aikalpaAdmin:yft0mBaClxkEB8BG@cluster0.pz1ji.mongodb.net/?retryWrites=true&w=majority