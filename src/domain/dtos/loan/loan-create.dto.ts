import { validators } from "../../../config/validators"

export class CreateLoanDto{

    constructor(

        public users: string,
        public books: string,
        public date: Date

    ){}


    static create(object:  {  [key: string]: any }  ): [string?, CreateLoanDto?]{

        const {users, books, date} = object

        if(!users) return ['The user is required', undefined]

        if(!validators.IsMongoId(users)) return ['The user id is not valid', undefined]

        if(!books) return ['The book is required', undefined]

        if(!validators.IsMongoId(books)) return ['The book id is not valid', undefined]
         
        return [undefined, new CreateLoanDto(users, books, date)]

    }

}