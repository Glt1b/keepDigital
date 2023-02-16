const { getDetailsDynamo } = require("../models/models")


exports.getDetails = (req, res) => {
    getDetailsDynamo.then((result) => {
        res.status(200).send({data: result})
    })
}