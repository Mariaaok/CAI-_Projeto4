const jwt = require("jsonwebtoken");

module.exports = function security() {

    let Security = {}
    const secretKey = "your-secret-key";

    //Função para gerar o token de acesso da sessão
    Security.generateToken = (userId) => {
        return jwt.sign({ userId }, secretKey, { expiresIn: 60 * 60 });
    };

    //checagem de token de acesso
    Security.verifyJWT = (req, res, next) => {

        //console.log('verify ', req.headers)
        let token = req.headers.authorization

        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

            // se tudo estiver ok, salva na sessão para uso posterior
            req.session.userId = decoded.userId;
            //console.log('verify: ', req.session)
            next();
        });
    }

    return Security
}