let db = require('../db')
const security = require('../security')
const controller = require('../controllers/user')

module.exports = function routes(app) {


    app.get("/user/list", controller().list)

    app.post('/user/login', controller().login)

    app.post('/user/create', controller().create)

    app.get('/user/populate', controller().populate)

    return app
}
