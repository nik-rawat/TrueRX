// filepath: c:\Nikhil\Hackathon\Perplexity\TrueRX\server\controllers\userController.js
import * as userService from "../services/userService.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};