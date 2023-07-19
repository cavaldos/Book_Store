const db = require('../models')
const User = db.User;

// exports.create = (req, res) => {
//     console.log('Creating new Users...');
//     console.log(req.body.username);
//     if (!req.body.username || !red.body.password) {
//         res.status(400).send('Username/Password cannot be empty!');
//         return;
//     }
//     const user = new User({
//         id: uuidv4(),
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password,
//     })
//     user
//         .save(user)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(error => {
//             res.status(500).send({
//                 message:
//                 error.message || 'Some error occured'
//             })
//         })
// }

exports.findAll = (req, res) => {
    console.log('Listing all users...');
    User.find()
        .then(data => {
            if (data){
                console.log(data);
                res.send(data);
            }
            else{
                console.log('Empty data!');
            }
        })
        .catch(error => console.log(error))
}



