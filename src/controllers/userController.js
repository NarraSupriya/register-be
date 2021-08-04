const User = require('../models/user');

exports.signUp = async (req, res, next) => {

    User.create({
        ...req.body
    });

    res.status(200).json({
        status: "success"

    })
};

exports.getUsers = async (req, res, next) => {

    const data = await User.find().populate('profilePicture');

    res.status(200).json({
        status: "success",
        data

    })
};