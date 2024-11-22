import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // const token = req.body.token;
    // console.log(token);

    const token = req.headers["authorization"]?.split(" ")[1]; // Get the token part after "Bearer"

    if (!token) {
        return res.status(401).send("Access Denied");
    }

    jwt.verify(token, process.env.JWT_SECRET, async (error, user__) => {
        if (error) {
            return res.status(403).send("Invalid Token");
        }
        // req.user = user__;
        // console.log(user__);
        next();
    });
}
