export default class recuruiterModel{
    constructor(_id,_name,_email,_password,_phone){
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.phone = _phone;
    }

    static getAllUsers() {
        return RecruiterData;
    }

    static getUserById(id) {
        return RecruiterData.find(user => user.id == id);
    }
    static createUser(_name,_email,_password,_phone) {
        const newId = RecruiterData.length ? RecruiterData[RecruiterData.length - 1].id + 1 : 1;
        const newUser = new recuruiterModel(newId,_name,_email,_password,_phone);
        RecruiterData.push(newUser);
        return newUser;
    }

    static deleteUser(id) {
        const index = RecruiterData.findIndex(user => user.id == id);
        if (index !== -1) {
            RecruiterData.splice(index, 1);
            return true;
        }
        return false;
    }
}

let RecruiterData =[
    new recuruiterModel(1,"Admin","admin@example.com","admin123","9876543210")
]