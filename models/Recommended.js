const mongoose = require('mongoose');

const recommendedSchema = mongoose.Schema(
    {
        _id: {type: Number,
            required: [true, "Please provide a unique id"]
          },
            name: {
                type: String,
                required: [true, "Please enter product name"]
            },
    
            description: {
                type: String,
                required: [true, "Please enter product description"]
            },
    
            price: {
                type: Number,
                required: [true, "Please enter product price"]
            },
    
            stars: {
                type: Number,
                required: [true, "Please enter product stars"]
            },
    
            img: {
                type: String,
                required: [true, "Please enter product image"]
            },
            location: {
                type: String,
                required: [true, "Please enter product location"]
            },
    
            typeId: {
                type: Number,
                required: [true, "Please enter product type"]
            }  
        },
        {
            timestamps: true,
        }
    
)

const Recommended = mongoose.model('Recommended', Recommended) 
module.exports = Recommended