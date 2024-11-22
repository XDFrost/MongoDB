import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};