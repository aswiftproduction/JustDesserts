const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/', this.submit);

    return router;
  },
  index(req, res) {
   res.render('sign-up');
  },
  submit(req, res) {
    console.log("submit function was reached");
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
          res.redirect('/profile')
       );
    }).catch(() => {
      res.render('sign-up');
    });
  },
};
