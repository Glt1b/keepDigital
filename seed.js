process.env.CYCLIC_DB = 'https://cyan-sea-urchin-slip.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('cyan-sea-urchin-slipCyclicDB')

run = async function(){

    let details = db.collection('details')

    let data = await details.set('project_name', {
        "active_sections": ["About", "Gallery"],
        "text_about": "This is sample of about text.",
        "image_about": "",
    })

    // let del = await details.delete('project_name')

     let getData = await details.get('project_name')



     console.log(getData)
}


run()