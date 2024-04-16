import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import { setUser } from "../service/auth.js";
import { Bussiness } from "../models/Bussiness.js";

export const handleGetAllUsers = async (req, res) => {
    const allDbUsers = await User.find({ email: { $ne: "admin@gmail.com" } }, { password: 0, __v: 0, createdAt: 0, updatedAt: 0 });
    res.json(allDbUsers);
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (!user) return res.status(404).json({ status: 'Not Found' })
    return res.json(user);
};

export const handleUpdateUserById = async (req, res) => {
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        username: body.username,
        email: body.email,
        mobile_no: body.mobile_no,
        address: body.address,
        bussiness_type: body.bussiness_type
    });
    return res.status(201).json({ msg: 'User updated successfully' });
}

export const handleDeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: 'User deleted successfully' });
};

export const handleCreateNewUser = async (req, res) => {
    const body = req.body;
    console.log(req.body);
    if (!body.username ||
        !body.email ||
        !body.mobile_no ||
        !body.address ||
        !body.password ||
        !body.bussiness_type) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const checkSameEmail = await User.find({ email: body.email });
    if (checkSameEmail.length !== 0) {
        return res.status(409).json({ msg: "Email already in use" });
    }

    const bussiness = await Bussiness.findOne({ type: body.bussiness_type })
    const userRole = await Role.findOne({ type: "user" });

    await User.create({
        username: body.username,
        email: body.email,
        mobile_no: body.mobile_no,
        address: body.address,
        bussiness: bussiness,
        password: body.password,
        role: userRole,
    });

    return res.status(201).json({
        msg: 'User created successfully'
    })
};

export const handleUserLogin = async (req, res) => {
    const body = req.body;
    debugger
    const user = await User.findOne({ email: body.email, password: body.password }, { password: 0, __v: 0 });
    if (!user) return res.status(404).json({ msg: "User not found!" });
    if (user.isVerified()) {
        const token = setUser(user);
        return res.status(200).json({
            user: user,
            uid: token,
        });
    } else {
        return res.status(404).json({ msg: "You are not allowed to login yet!" });
    }
};

export const handleRejectUserById = async (req, res) => {
    const body = res.body;
    const user = await User.findByIdAndUpdate(req.params.id, {
        verified: 'rejected',
    });
    return res.status(200).json({ msg: "User rejected successfully" });
};

export const handleAcceptUserById = async (req, res) => {
    console.log(req.params.id);
    const user = await User.findByIdAndUpdate(req.params.id, {
        verified: 'accepted',
    });
    return res.status(200).json({ msg: "User accepted successfully" });
};