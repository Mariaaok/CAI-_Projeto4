let db = require('../db')
const security = require('../security')
const controller = require('../controllers/account')

module.exports = function routes(app) {

    app.get("/account/list", controller().list)

    app.get('/account/populate', controller().populate)

    return app
}
