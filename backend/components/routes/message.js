let db = require('../db')
const security = require('../security')
const controller = require('../controllers/message')

module.exports = function routes(app) {

    app.get("/message/list", security().verifyJWT, controller().list)

    app.post("/message/create", security().verifyJWT, controller().create)

    return app
}
