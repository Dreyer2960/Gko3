class User {
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
user2 = new FreeUser ("Jane", "Smith", "Female", "Sports", "John Doe", "image");

let userArray = [user1, user2]

module.exports = userArray