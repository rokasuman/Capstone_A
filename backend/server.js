import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//app comfig
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//api emdpoints
app.use('/api/adim',adminRouter)

app.get('/',(req,res)=>{
    res.send("api is working so great")
})

//api
app.listen(port,()=>console.log("server started",port))