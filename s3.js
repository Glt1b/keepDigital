const AWS = require("aws-sdk");
const fs = require('fs')
const s3 = new AWS.S3()
const bucket = 'cyclic-cyan-sea-urchin-slip-eu-central-1'



const storage = async function (){
/*
    console.log(image)
    const uploadedImage = await s3.upload({
        Bucket: bucket,
        Key: 'project2-second_floor',
        Body: image,
      }).promise()

    const del = await s3.deleteObject({
        Bucket: bucket,
        Key: 'marker3'
    }).promise()
*/
    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: "about",
    }).promise()

    //const buffer = Buffer.from(my_file, "base64");

   console.log(my_file.Body)


}

storage()