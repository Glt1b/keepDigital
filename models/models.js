process.env.CYCLIC_DB = 'https://cyan-sea-urchin-slip.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('cyan-sea-urchin-slipCyclicDB')

exports.getDetailsDynamo = async () => {
    let details = db.collection('details');
    let data = await details.get('project_name');
    return data.props
}
