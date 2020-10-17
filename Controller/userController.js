const userArray = require('../Userdata/userData');
const users = require('../Userdata/userData')

//hardcoder ny user ud fra model-klasse

//controller
function userController(req, res) {
    res.json(userArray)
}


//eksporter controlleren
module.exports = userController;