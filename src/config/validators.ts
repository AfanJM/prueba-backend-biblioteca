import mongoose from 'mongoose'

export class validators{

    static IsMongoId(id: string){

    return mongoose.isValidObjectId(id)

    }
}