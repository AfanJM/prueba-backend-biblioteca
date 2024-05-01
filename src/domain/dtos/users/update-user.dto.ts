

export class UpdateUserDto{

    constructor(

        public name?: string,
        public email?: string,
        public password?: string

    ){ }

    static create (  object: {[key: string]: any }   ): [string?, UpdateUserDto?] {

        const {name, email, password} = object

        return [undefined, new UpdateUserDto(name, email, password)];


    }


}