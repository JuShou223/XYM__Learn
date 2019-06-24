const GROUP_NAME = 'shops';
const models = require('../models')
module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            const {rows: results, count: totalCount} = await models.shops.findAndCountAll({
                attributes: [
                    'id',
                    'name'
                ],
                limit: 2,
                offset: 0
            })
            // controller
            // sql
            reply({
                results,
                totalCount
            })
        }
    }
]