const Message = require('../models/message')

module.exports = function controller() {
    let Controller = {}

    Controller.create = (req, res, next) => {
        console.log('usuario logado: ', req.session.userId)

        console.log('mensagem: ', req.body.message)

        let newRegister = {
            content: req.body.message,
            user: req.session.userId
        }

        Message.create(newRegister).then((message)=>{
            console.log('create: ', message)
            res.send({ response: "OK", messageID: message._id })
        })
                

    }    

    Controller.list = (req, res, next) => {
        console.log('usuario logado: ', req.session.userId)

        Message.find({user:req.session.userId}).then((messages)=>{
            console.log('list', messages)
            res.send(messages)
        })
    }

    return Controller
}