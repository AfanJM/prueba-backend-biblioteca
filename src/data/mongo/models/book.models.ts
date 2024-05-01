import {Schema, model} from 'mongoose'


const BookSchema = new Schema({


    title: {
        type: String
    },

    author: {
        type: String
    },
    
    year: {
        type: Number
    },

    ISBM: {
        type: String
    }, 

    available: {

        type: Boolean,
        default: true
    }


})

export const BookModel = model('Book', BookSchema)