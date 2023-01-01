import { config } from "dotenv";
config('.env');


export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI ;
