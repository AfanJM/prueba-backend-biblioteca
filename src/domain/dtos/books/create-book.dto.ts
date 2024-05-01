


export class CreateBookDto {

    constructor(

        public title: string,
        public author: string,
        public year: number,
        public ISBM: string,
        public available: boolean


    ){}



    static create (  object: {[key: string]: any }   ): [string?, CreateBookDto?] {

        const {title, author,year, ISBM, available} = object;

        if(!title) return ['The title is required', undefined];

        if(!author) return ['The author is required', undefined];

        if(!year) return ['The year is required', undefined];

        if(isNaN(year)) return ['The year must be a number', undefined];

        if(!ISBM) return ['The ISBM is required', undefined];

        if(!available) return ['The available is required', undefined];

        return [undefined, new CreateBookDto(title, author,year, ISBM, available)];
    }


}