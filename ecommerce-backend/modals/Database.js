import mongoose from "mongoose";
const Schema = mongoose.Schema

const ProductData = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required:true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        // required: true
    },
    desciption:{
        type: String,
        required:true
    },
    ratings:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RatingData'
    },
    nameOfRating:{
        type:Number,
    },
    stock:{
        type: Number,
        required:true
    },
    catagory:{
        type: String,
        required: true
    },
    coupon:{
        type: String
    },
    discount:{
        type: Number
    },
    discountLimit:{
        type: Number
    },
    totalSale:{
        type: Number
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
},
{
    timestamps:true
}
)

const Product = mongoose.model('products',ProductData)
export default Product
