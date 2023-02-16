process.env.CYCLIC_DB = 'https://cyan-sea-urchin-slip.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('cyan-sea-urchin-slipCyclicDB')
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const bucket = 'cyclic-cyan-sea-urchin-slip-eu-central-1'

exports.getDetailsDynamo = async () => {
    let details = db.collection('details');
    let data = await details.get('project_name');
    return data.props
}

exports.patchDetailsDynamo = async (obj) => {
    let details = db.collection('details');
    let data = await details.set('project_name', obj);
    console.log(data)
    return data;
}

exports.getImageS3 = async (image_id) => {

    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: image_id
    }).promise()

    return my_file.Body
}

exports.postImageS3 = async (image_id, image) => {
    const uploadedImage = await s3.upload({
        Bucket: bucket,
        Key: image_id,
        Body: image.img,
      }).promise()

    return 'uploaded'
}
