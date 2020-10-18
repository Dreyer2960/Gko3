const userArray = require('../Userdata/userData');
const users = require('../Userdata/userData')



//controller
function userController(req, res) {
    res.json(userArray)
}


//eksporter controlleren
module.exports = userController;