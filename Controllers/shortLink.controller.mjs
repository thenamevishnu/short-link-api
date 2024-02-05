import { isUri } from "valid-url";
import { urlSchema } from "../Models/url.model.mjs";
import { get_uuid } from "../Utils/shortLink.mjs";

const create = async (req, res) => {
    try {
        const { link } = req.body
        if (!link || !isUri(link)) {
            return res.status(404).send({
                message: "Enter a valid url"
            })
        }
        const response = await urlSchema.findOne({
            url: link
        })
        if (response) {
            return res.status(201).send({
                link: process.env.SERVER_URL + "/r/" + response._id
            })
        }
        const uid = get_uuid()
        while (true) {
            const records = await urlSchema.findOne({
                _id: uid
            })
            if (!records) {
                const response = await urlSchema.create({
                    _id: uid,
                    url: link
                })
                if (response._id == uid) {
                    return res.status(201).send({
                        link: process.env.SERVER_URL + "/r/" + uid
                    })
                } else {
                    return res.status(500).send({
                        message: "Internal server error"
                    })
                }
            }
        }
    } catch (err) {
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}

const getLink = async (req, res) => {
    try {
        const { uid } = req.params
        if (!uid) {
            return res.status(404).send({
                message: "Invalid short link!"
            })
        }
        const findLink = await urlSchema.findOne({
            _id: String(uid)
        })
        if (!findLink) {
            return res.status(404).send({
                message: "Invalid short link!"
            })
        }
        return res.status(200).redirect(findLink.url)
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}

export default {
    create,
    getLink
}