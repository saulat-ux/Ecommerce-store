const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    
    quantity: {
        type: Number,
        // required: [true, "Please add a quantity"],
        trim: true,
    },
    price: {
        type: String,
        required: [true, "Please add a price"],
        trim: true,
    },
    
    imageURL: {
        type: String,
       
    },
   
},
{
    timestamps:true,
}
)

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart