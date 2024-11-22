import adminModel from "../models/Admin.js";
import { generateToken } from "../utils/jwt.js";

const Adminregister = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        if (!email || !password || !name) {
            return res.status(400).json({ msg : "Please enter all fields" });
        }

        const admin = await adminModel.create({
            email: email,
            password: password,
            name: name
        });
        return res.status(201).json({ admin });
    }
    catch (err) {
        return res.status(500).json({ msg : err.message });
    }
}

const Adminlogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ msg : "Please enter all fields" });
        }

        const admin = await adminModel.findOne({ email: email });
        if (!admin) {
            return res.status(400).json({ msg : "Admin does not exist" });
        }

        if (password !== admin.password) {
            return res.status(400).json({ msg : "Invalid credentials" });
        }

        const token = generateToken(admin);
        
        return res.status(200).json({ token });
    }
    catch (err) {
        return res.status(500).json({ msg : err.message });
    }
}


export { Adminregister, Adminlogin };