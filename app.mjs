import express from "express"
import env from "dotenv"
import * as db from "./Config/db.mjs"
import cors from "cors"
import shortLinkRouter from "./Routes/shortLink.route.mjs"

env.config()
db.setConnection(process.env.MONGODB_URL)

const app = express()
app.use(cors({
    origin: "*",
    methods: "*"
}))
app.use(express.json())
app.use("/", shortLinkRouter)

app.listen(process.env.PORT, () => {
    console.log("Server connected!")
})