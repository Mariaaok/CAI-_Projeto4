const Account = require('../models/account')

module.exports = function controller() {
    let Controller = {}

    Controller.list = (req, res, next) => {
        Account.find({}).then((accounts) => {
            console.log('list:', accounts)
            res.send(accounts)
        })
    }

    Controller.populate = (req, res, next) => {
        const newAccount = new Account({
            user: "6841a5bbb91880e6c3ec151a",
        })

        newAccount.save().then(() => {
            console.log("Conta criada!")
            res.send("Conta criada")
        }).catch((err) => {
            console.log(err)
            throw err
        })
    }

    return Controller
}