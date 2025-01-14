import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({ origin: "http://localhost:5173" }));

app.listen(process.env.PORT || 4000, () => {
    console.log(`server running on ${process.env.PORT || 4000}`)
})