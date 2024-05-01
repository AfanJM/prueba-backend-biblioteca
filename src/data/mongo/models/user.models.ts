import {Schema, model} from 'mongoose';


const UserShema = new Schema({

    name: {
        type: String,

    },

    email: {
        type: String
    },


    password: {

        type: String
    },

    //referencia a los libros
    books: {

        type: Schema.Types.ObjectId,
        ref: 'Book'
    }

})

export const userModel = model('User', UserShema);