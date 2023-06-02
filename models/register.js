const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please enter your firstName"]
        },

        lastName: {
            type: String,
            required: [true, "Please enter your lastName"]
        },

        email: {
            type: String,
            required: [true, "Please enter your email address"]
        },

        password: {
            type: String,
            required: [true, "Please enter your password"]
        }
    },
    {
        timestamps: true,
    }
)

const  SignUp = mongoose.model('SignUp', signUpSchema);
module.exports = SignUp;