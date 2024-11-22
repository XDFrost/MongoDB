import userModel from "../models/UserModel.js";
import { generateToken } from "../utils/jwt.js";

const UserRegister = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        if (!email || !password || !name) {
            return res.status(400).json({ msg : "Please enter all fields" });
        }

        const userExists = await userModel.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ msg : "User already exists" });
        }

        const user = await userModel.create({
            email: email,
            password: password,
            name: name
        });
        return res.status(201).json({ user });
    }
    catch (err) {
        return res.status(500).json({ msg : err.message });
    }
}

const UserLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ msg : "Please enter all fields" });
        }

        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg : "User does not exist" });
        }

        if (password !== user.password) {
            return res.status(400).json({ msg : "Invalid credentials" });
        }

        const token = generateToken(user);
        
        return res.status(200).json({ token });
    }
    catch (err) {
        return res.status(500).json({ msg : err.message });
    }
}

export { UserRegister, UserLogin };