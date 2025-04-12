import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";

const Register = async(req,res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            throw new Error("All Fields Are Required!");
        }

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({ success: false, message: "User Already Exists" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        return res.status(201).json({ success: true, message: "Registration Successful", token: generateToken(user._id), name: user.name, email: user.email });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
} 

const Login = async(req,res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            throw new Error("All Fields Are Required!");
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({ success: false, message: "Invalid EmailId" });
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if(!isValidPassword) {
            return res.status(400).json({ success: false, message: "Invalid Password" });
        }

        return res.status(200).json({ success: true, message: "Login Successful", token: generateToken(user._id), name: user.name, email: user.email });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
} 

export { Register, Login };