const mongoose = require('mongoose')
const db = require('../models')
const User = db.User;

function generateConfirmationCode() {
    const length = 6;
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var code = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        code += charset[randomIndex];
    }
    return code;
}

// Example usage: Generate a confirmation code of length 6
const confirmationCode = generateConfirmationCode(6);
console.log(confirmationCode);


exports.create = (req, res) => {
    console.log('Creating new accounts...');
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
        res.status(400).send('Username/Password cannot be empty!');
        return;
    }
    const confirmationCode = generateConfirmationCode();

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        confirmationCode: confirmationCode,
        admin: false,
    })
    console.log(user);
    user
        .save(user)
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send({
                message:
                error.message
            })
        })
}

exports.findAll = (req, res) => {
    console.log('Listing all accounts...');
    User.find()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => console.log(error))
}

exports.findOne = (req, res) => {
    const id = req.body;
    if (!id || id.Types != String){
        res.status(400).send('Illegal ID!');
        return;
    }
    console.log(`Getting user by ID ${id}`)
    User.find({'_id':id})
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => console.log(error))
}

exports.findOneByUsername = (req, res) => {
    const username = req.params.username;
    if (!username || typeof username !== 'string'){
        res.status(400).send('Illegal username!');
        return;
    }
    console.log(`Getting user by username ${username}`)
    User.find({'username':username})
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => console.log(error))
}

exports.update = (req, res) => {
    const username = req.params.username;
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
    }
    User.updateOne({username}, data)
        .then(data => {
            console.log(data);
            res.send('Successfully updated');
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error || 'Some error occured');
        })
}
exports.delete = (req, res) => {

}
exports.deleteAll = (req, res) => {

}



