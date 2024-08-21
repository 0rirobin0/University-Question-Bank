const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const path = require('path');
const mailSender = require('../utils/mailSender');

exports.userRegistration = async (req, res) => {
  const { name, email, password, university } = req.body;

  try {
    // Check if the email already exists
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user object (not saving to DB yet)
    const user = {
      name,
      email,
      password,
      university
    };

    // Generate activation token and code
    const ActivationToken = createActivationToken(user);
    const activationcode = ActivationToken.activationcode;

    // Prepare the data for the email template
    const data = { name: user.name, activationcode: activationcode };

    // Define the email sending logic
    try {
      // Use the mailSender utility to send the activation email
      await mailSender({
        email: user.email,
        subject: "Activate Your Account",
        template: "activation-mail.ejs",
        data,
      });

      // Send a response indicating the email has been sent
      res.status(201).json({
        success: true,
        message: `Please check your email ${user.email} to activate your account.`,
        ActivationToken: ActivationToken.token,
      });
    } catch (error) {
      // If there's an error while sending the email
      return res.status(500).json({
        message: `Failed to send activation email: ${error.message}`,
      });
    }

  } catch (error) {
    // Catching general errors in the registration process
    return res.status(500).json({
      message: `Registration failed: ${error.message}`,
    });
  }
};

// Function to create activation token and code
const createActivationToken = (user) => {
  const activationcode = Math.floor(1000 + Math.random() * 9000).toString();

  const token = jwt.sign(
    { user, activationcode },
    process.env.ACTIVATION_SECRET,
    { expiresIn: '10m' }
  );

  return { token, activationcode };
};
