import { Schema, model } from 'mongoose' 
const BookSchema = new Schema ({
    title : String,
    subtitle : String,
    publishedAt : Date,
    author : String,
    volume : Number,
    isbn : String,
    edition : Number
}, {
    timestamps: true
})

export default model('Book', BookSchema)