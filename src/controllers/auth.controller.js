import * as authentication from '../services/auth.service.js';

export const register = async (req, res) => {
    const { name, email, number, password, address } = req.body;
    const userRegister = await authentication.register(name, email, number, password, address);
    if (userRegister === "error1") {
        return res.status(402).json({ message: "email already exist" });
    }
    if (userRegister === "error2") {
        return res.status(409).json({ message: "Phone number already exists" });
    }
    return res.status(201).json({ message: "User created successfully", user: userRegister });
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await authentication.login(email, password);

    if (result.error) {
        return res.status(401).json({ message: result.error });
    }

    res.status(200).json(result);
};