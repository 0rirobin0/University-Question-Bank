const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EmailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter email"],
      validate: {
        validator: function (value) {
          return EmailRegexPattern.test(value);
        },
        message: "Please enter a valid email!",
      },
      unique: true,
    },
    university: {
      type: String,
      required: [true, "Please Enter University name"],
    },
    password: {
      type: String,
      required: [true, "Please Enter password"],
      minlength: [6, "Password must be at least 6 characters!"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the user to the database
UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare entered password with the hashed password in the database
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
