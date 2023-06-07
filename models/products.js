const mongoose = require('mongoose')
//const  nanoid = require('nanoid')
const productsSchema = mongoose.Schema(
    {
      
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

// function generate(count, k) {
//     var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890'
//     var str = '';

//     for(var i = 0; i < count; i++) {
//         str += _sym[parseInt(Math.random() * (_sym.length))];
//     }
//     base.getID(str, function(err, res) {
//         if(!res.length) {
//           k(str)                   // use the continuation
//         } else generate(count, k)  // otherwise, recurse on generate
//     });
// }