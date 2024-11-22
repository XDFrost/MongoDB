import SModel from "../models/StudentModel.js";
import { generateToken } from "../utils/jwt.js";

const getAll = async (req, res) => {
    try {
        const students = await SModel.find();
        return res.status(200).send(students);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const addUsingToken = async (req, res) => {
    try {
        const token = generateToken(req.body);
        console.log(token);
        
        const student = await SModel.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            hobbies: req.body.hobbies,
            token: token
        });
        return res.status(201).send(student);
    }   
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const addWithoutToken = async (req, res) => {
    try {
        const { name, age } = req.body;
        const student = await SModel.create({
            name: name,
            age: age
        });
        return res.status(201).send(student);
    }   
    catch (err) {
        return res.status(500).send(err.message);
    }
}

const login = (req, res) => {
    try {
        const user = SModel.findOne({ email: req.body.email });
        if(user) {
            return res.status(200).json({message : "Logged in"});
        }
        return res.status(401).json({message : "Invalid email"});
    }
    catch (err) {
        return res.status(500).send(err.message);   
    }
}

export { getAll, addUsingToken, addWithoutToken, login };