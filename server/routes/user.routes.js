module.exports = app => {
    const Users = require('../controllers/user.controller.js')

    var router = require('express').Router();

    // router.post('/', Users.create);
    router.get('/', Users.findAll);


    app.use('/api/data/users', router);

}