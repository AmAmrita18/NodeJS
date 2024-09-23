//controller k andar ek function hote hai jisko hm apne files k saath attach karte hai
const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    //ye route particular user return kar rha hai
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'user not found' })
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
    //create new users
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address) {
        return res.status(400).json({ msg: "All fields are required..." });

    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        ipAddress: body.ip_address,
    });
    console.log("result", result);

    return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}