import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'https//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));


app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
    
})