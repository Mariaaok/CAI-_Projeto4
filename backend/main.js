//dependências
const setup = require('./components/setup')
const app = setup()



//ligando o servidor
app.listen(8080, () => {
    console.log('app running on 8080')
})