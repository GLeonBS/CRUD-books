import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import cors from 'cors'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware():void {
        this.express.use(cors())
        this.express.use(express.json())
    }

    public routes(): void {
        this.express.use(routes)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/books')
            console.log("Connect database sucess")
        } catch (err) {
            console.error('Connect database fail, error: ', err)
        }
    }
}

export default new App().express