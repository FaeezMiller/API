const User =  require("../models/.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
const User = new User({
    id : req.body.id,
    UserName : req.body.UserName,
    purchase : req.body.purchase,
    ContactNo : req.body.ContactNo,
    ProductCategory : req.body.ProductCategory
    });

    User.create(User, (err, data) => {
        if(err)
            res.status(500).send({
                message: 
                    err.message || 'An error occurred while creating a user team'
            });
        else res.send(data);
    });
};


exports.findAll = (req , res) => {
    const id = req.query.id;

    Soccer.getAll(id, (err, data) => {
        if(err)
            res.status(500).send({
                message: 
                    err.message || 'An error occurred while retrieving a soccer team'
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found user with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                  message: "Error retrieving user with id " + req.params.id
                });
            }
        }   else res.send(data);
    }); 
};

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send ({
            message: 'Content can not be empty!'
        })
    }

    console.log(req.body);

    User.updateById(
        req.params.id,
        new Soccer (req.body),
        (err, data) => {
            if(err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Did not find user team with id ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: 'Error updating user team with id' + req.params.id
                    });
                } 
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
        if(err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Did not find user with id ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete user with id' + req.params.id
                });
            }
        } else res.send({ message: `User team was deleted successfully!`});
    });
};

exports.deleteAll = (req, res) => {
    User.removeAll((err, data)=> {
        if(err)
            res.status(500).send({
                message: 
                    err.message || 'Some error occurred while removing all soccer teams'
            });
        else res.send({message: 'All users was deleted successfully!'})
    });
};