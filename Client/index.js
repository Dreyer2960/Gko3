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

class FreeUser {
    constructor (firstName, lastName, gender, interest, match, image){
        super (firstName, lastName, gender, interest, match, image)
    }
}