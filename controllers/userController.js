import User from '../models/user.js';
import bcrypt from 'bcrypt';

const userController={
    getAllUsers: async(req, res) =>{
        try{
            const users = await User.find();
           return res.status(200).json(users);          
        }catch(error){
           return res.status(500).json({message: error.message});
        }
    },
getUserById: async(req, res) =>{
    try{
            const {id} = req.params;
            const user = await User.findById(id);
          return res.status(200).json(user);
    }catch(error){
        return res.status(500).json({message: error.message});
    }    
},
    createUser: async(req, res) =>{
        try{
const {name, email, password} = req.body;

//check if the user already exists
const user = await User.findOne({email});

if(user){
    return res.status(400).json({message: "User already exists"});

}
//hash the password
const hashedPassword = await bcrypt.hash(password, 10);

const newUser = new User({name, email, password: hashedPassword});
await newUser.save();
return res.status(201).json(newUser);
        }catch(error){
           return res.status(500).json({message: error.message});
        }
    },
    updateUser: async(req, res) =>{
        try{
            const {id} = req.params;
            const {name, email, password, role} = req.body;
            const user = await User.findById(id);
            if(!user){
                return res.status(404).json({message: "User does not exist"});
            }
            // if(name){
            //     user.name = name;
            // }
            // if(email){
            //     user.email = email;
            // }
            let hashedPassword;

            if(password){
                 hashedPassword = await bcrypt.hash(password, 10);
         }

            await User.findByIdAndUpdate(id, {name, email, password: hashedPassword, role});

            return res.status(200).json({message: "User updated successfully"});            
        }catch(error){
           return res.status(500).json({message: error.message});
        }
    },
    deleteUser: async(req, res) =>{
        try{
            const {id} = req.params;
            const user = await User.findById(id);
            if(!user){
                return res.status(404).json({message: "User does not exist"});
            }
            await User.findByIdAndDelete(id);
            
            return res.status(200).json({message: "User deleted successfully"});
           }catch(error){
           return res.status(500).json({message: error.message});
        }        
    }
}
export default userController;