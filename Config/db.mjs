import { connect } from "mongoose"
import env from "dotenv"

env.config()

const dbName = process.env.MONGODB_NAME

export const setConnection = async (url) => {
    try {
        const db = await connect(url, {
            autoIndex: false //use this to restrict automatic _id creation
        })
        if (db.connection.name === dbName) {
            return console.log("Database connection successfull!")
        } else {
            throw Error("Please check your database name!")
        }
    } catch (err) {
        console.log("error while connecting db: ", err.message)
    }
}