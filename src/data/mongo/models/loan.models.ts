import {Schema, model} from 'mongoose'

const loanSchema = new Schema({


    users: {

        type: Schema.Types.ObjectId,
        ref: 'User'

    },


    books: {

        type: Schema.Types.ObjectId,
        ref: 'Book'
    },

    date: {

        type: Date
    }

})


export const LoanModel = model('Loan', loanSchema)