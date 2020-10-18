const users = require('../Userdata/userData')
var jwt = require('jsonwebtoken');



function loginController(req, res) {

    //Her laves en token, som dør om en time 
    const token = jwt.sign({users}, 'secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController