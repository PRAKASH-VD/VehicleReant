const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../utils/config');

const authController = {
    register: async (req, res) => {
       
        
       try {
        const {name, email, password} = req.body;

       //Check if the user is first user
       const users=await User.find();

       const role=users.length===0 ? 'admin' : 'user';

       //hash the password
       const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = new User({name, email, password: hashedPassword, role});

       //check if the User already exists
       const user = await User.findOne({email});

       if(user)
        {
        return res.status(400).json({message: "User already exists"});
       }
        await newUser.save();
        return res.json({message: "User Registered successfully"});    
        
       } catch (error) {
        return res.status(400).json({message: error.message});

       }

 },
    login: async (req, res) => {
  try {
    const {email, password} = req.body;

    //check if the user exists
    const user=await User.findOne({email});
    if(user.length===0){
        return res.status(400).json({message: "User not Found"});
    }

    //check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid password"});
    }

    //Generate JWT token    
    const token = jwt.sign({userId: user._id},JWT_SECRET);

    //store the token in cookie
    res.cookie('token', token, {httpOnly: true});

    return res.json({message: "User Logged in successfully"});
      
  } catch (error) {

    return res.status(400).json({message: error.message});
    
  }
    },
    logout: async (req, res) => {
      try {
        res.clearCookie('token');
        return res.json({message: "User Logged out successfully"});
      } catch (error) {
        return res.status(400).json({message: error.message});
        
      }
    },  
    me: async(req, res) => {
      try {
        const user = await User.findById(req.userId).select('-password-__v -_id -createdAt -updatedAt');


        return res.json(user);
        
      } catch (error) {
        return res.status(400).json({message: error.message});
      }
    }
       

}

module.exports = authController;