
export class UpdateBookDto{

    constructor(

        public title?: string,
        public author?: string,
        public year?: number,
        public ISBM?: string,
        public available?: boolean

    ){}


    static create (object: { [key: string]: any }): [string?, UpdateBookDto?]{

        const {title, author,year, ISBM, available} = object

        return [undefined, new UpdateBookDto(title, author,year, ISBM, available)]
    }

}