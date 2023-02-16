process.env.CYCLIC_DB = 'https://cyan-sea-urchin-slip.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('cyan-sea-urchin-slipCyclicDB')

run = async function(){

    let details = db.collection('details')

    let data = await details.set('project_name', {
        "active sections": [],
        "text_image": "test text for this section",
        "text_buttons": "test text for sections with buttons",
        "gallery": {
            "title": "this is title",
            "img": []
        },
        "text": "another test text"
    })

     let getData = await details.get('project_name')

     console.log(getData)
}

run()