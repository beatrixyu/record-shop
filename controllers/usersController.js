const User = require('../models/User')
const {validationResult} = require('express-validator')
exports.getUsers = (req, res, next) => {
  // Schreib hier code um alle Kunden aus der users-Collection zu holen

  res.status(200).send(users);
};

exports.getUser = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu holen

  res.status(200).send(user);
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu löschen

  res.status(200).send(user);
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um den User mit der id aus params in der users-Collection mit den Daten aus req.body zu aktualisieren

  res.status(200).send(user);
};

exports.addUser = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()})
  }
  const user = req.body;
  // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
  const newUser = new User(user)
  await newUser.save()
  res.status(200).send(user);
};
