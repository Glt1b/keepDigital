const { getDetailsDynamo,
        patchDetailsDynamo,
        getImageS3,
        postImageS3 } = require("../models/models")


exports.getDetails = (req, res) => {
    getDetailsDynamo().then((result) => {
        res.status(200).send({data: result})
    })
}

exports.patchDetails = (req, res) => {
    patchDetailsDynamo(req.body).then((result) => {
        res.status(200).send({msg: "data updated"})
    })
}

exports.getImage = (req, res) => {
    getImageS3(req.params.image_id).then((result) => {
        obj = {image: result}
        res.status(200).send(obj)
    })
}

exports.postImage = (req, res) => {
    postImageS3(req.params.image_id, req.body).then((result) => {
        res.status(201).send()
    })
}