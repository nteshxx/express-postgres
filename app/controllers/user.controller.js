const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
});

const findUser = catchAsync(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
});

const createUser = catchAsync(async (req, res) => {
    const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    const user = await User.create(USER_MODEL);
    return res.status(201).json(user);
});

const updateUser = catchAsync(async (req, res) => {
    const USER_MODEL = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    const user = await User.update(USER_MODEL, { where: {id: req.params.id} });
    return res.status(200).json(user);
});

const deleteUser = catchAsync(async (req, res) => {
    const user = await User.destroy({ where: {id: req.params.id} });
    return res.status(200).json(user);
});

module.exports = {
    getAllUsers,
    findUser,
    createUser,
    updateUser,
    deleteUser,
};
