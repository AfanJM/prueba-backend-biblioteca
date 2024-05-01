import { validators } from "../../../config/validators";

export class CreateUserDto{


    constructor(

        public name: string,
        public email: string,
        public password: string,
        public books: string


    ){} 

    
    static create (  object: {[key: string]: any }   ): [string?, CreateUserDto?] {

        const {name, email, password, books} = object;

        if(!name) return ['The name is required', undefined];

        if(!email) return ['The email is required', undefined];

        if(!password) return ['The password is required', undefined];

        if(!books) return ['The bookId is required', undefined];

        if(!validators.IsMongoId(books)) return ['The bookId is not valid', undefined]

        return [undefined, new CreateUserDto(name, email, password, books)];
    }

}