import User from '../model/user.model.js';
import Farmer from '../model/Farmerprofile.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from './mail.service.js';

export const registerUser = async (name, email, number, password, address) => {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error("Email already exists");
    }

    const numberExists = await User.findOne({ number });
    if (numberExists) {
        throw new Error("Phone number already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name, email, number, password: hashedPassword, address
    });

    await user.save();
    await sendWelcomeEmail(email, name);
    return user;
};

export const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return { token, user };
};

export const registerFarmer = async (name, email, number, password, address, location) => {
    const emailExists = await Farmer.findOne({ email });
    if (emailExists) {
        throw new Error("Email already exists");
    }

    const numberExists = await Farmer.findOne({ number });
    if (numberExists) {
        throw new Error("Phone number already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const farmer = new Farmer({
        name, email, number, password: hashedPassword, address, location
    });

    await farmer.save();
    await sendWelcomeEmail(email, name);
    return farmer;
};

export const loginFarmer = async (email, password) => {
    const farmer = await Farmer.findOne({ email });
    if (!farmer) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: farmer._id, role: 'farmer' }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return { token, farmer };
};
