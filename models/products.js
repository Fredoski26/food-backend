const mongoose = require('mongoose')
import { nanoid } from 'nanoid'
model.id = nanoid()
const productsSchema = mongoose.Schema(
    {
        id:nanoid(10), require:[true, "Could not provide a unique id"],

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
        }

        // typeId: {
        //     type: String,
        //     required: [true, "Please enter product type"]
        // }
        
    },
    {
        timestamps: true,
    }
    
)

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;