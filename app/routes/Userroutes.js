module.exports = app => {
  const soccer = require('../controller/Usercontroller');

  var router = require("express").Router();

  router.post("/", User.create);

  router.get("/", User.findAll);

  router.get("/:id", User.findOne);

  router.put("/:id", User.update);

  router.delete("/:id", User.delete);

  router.delete("/", User.deleteAll);

  app.use('/api/User', router);
};