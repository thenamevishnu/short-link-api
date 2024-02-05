import uuid from "short-unique-id"

const uid = new uuid({
    length: 10
})

export const get_uuid = () => {
    return uid.rnd()
}