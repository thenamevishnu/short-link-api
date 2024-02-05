import { Router } from "express"
import shortLinkController from "../Controllers/shortLink.controller.mjs"

const app = Router()

app.post("/short-link", shortLinkController.create)
app.get("/r/:uid", shortLinkController.getLink)

export default app