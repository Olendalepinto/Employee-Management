import User from "../models/user.model.js";

export const signUp = async (req, res) => {
   const { username, email, password } = req.body;

   const newUser = new User({
     username,
     email,
     password
   });

   try {
     await newUser.save();
     res.status(201).json({ message: "User created successfully" });
   } catch (error) {
     res.status(500).json({ message: "Error creating user", error: error.message });
   }
};