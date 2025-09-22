import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const { name, email, number, password, address } = req.body;
        const user = await authService.registerUser(name, email, number, password, address);
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await authService.login(email, password);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const registerFarmer = async (req, res) => {
    try {
        const { name, email, number, password, address, location } = req.body;
        const farmer = await authService.registerFarmer(name, email, number, password, address, location);
        res.status(201).json({ message: "Farmer registered successfully", farmer });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginFarmer = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, farmer } = await authService.loginFarmer(email, password);
        res.status(200).json({ token, farmer });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
