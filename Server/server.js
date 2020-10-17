/*class User {
    constructor (firstName, lastName, gender, interest, match, image){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.interest = interest;
        this.match = match;
        this.image = image;
    }
}

class PaymentUser extends User {
    constructor(firstName, lastName, gender, interest, match, image, creditCard){
        super(firstName, lastName, gender, interest, match, image)
        this.creditCard = creditCard;
    }
}

class FreeUser extends User {
    constructor (firstName, lastName, gender, interest, match, image){
        super (firstName, lastName, gender, interest, match, image)
    }
};

user1 = new PaymentUser ("John", "Doe", "Male", "Coding", "Jane Smith", "image", 1234123412341234);
user2 = new FreeUser ("Jane", "Smith", "Female", "Sports", "John Doe", "image");*/

const express = require('express'); //Initializes the express framework for my server
const app = express();

const port = 3000;


//henter controller fra sti
const userController = require('../Controller/userController')
const protectedController = require('../Controller/protectedController')
const loginController = require('../Controller/loginController')

//henter token
const ensureToken = require('../Token/ensureToken');
const userArray = require('../Userdata/userData');
//read endpoint på routen '/'
app.get('/', userController)

app.get('/protected', ensureToken,  protectedController)

app.post('/login', loginController)




app.get('/user', (req, res) => { //GET is used to retrieve data from the database
    res.send(userArray)

});

app.post('/user', (req, res) => { //POST is used to send to the database
    res.send("Post request recieved")

});

app.put('/user', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
    res.send("Put request recieved")

});

app.delete('/user', (req, res) => { //DELETE simply deletes resources from the database
    res.send("Delete request recieved")

});


app.get('/user/interest', (req, res) => { //GET is used to retrieve data from the database
    res.send("User1: " + user1.interest + " User2: " + user2.interest)

});

app.post('/user/interest', (req, res) => { //POST is used to send to the database
    res.send("Post request recieved")

});

app.put('/user/interest', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
    res.send("Put request recieved")

});

app.delete('/user/interest', (req, res) => { //DELETE simply deletes resources from the database
    res.send("Delete request recieved")

});

app.get('/user/match', (req, res) => { //GET is used to retrieve data from the database
    res.send(user1.match + " " + user2.match)

});

app.post('/user/match', (req, res) => { //POST is used to send to the database
    res.send("Post request recieved")

});

app.put('/user/match', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
    res.send("Put request recieved")

});

app.delete('/user/match', (req, res) => { //DELETE simply deletes resources from the database
    res.send("Delete request recieved")

});


app.listen(port, console.log('The server is running on port ' + port));