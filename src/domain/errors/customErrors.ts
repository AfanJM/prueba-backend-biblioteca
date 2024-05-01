


export class CustomErrors  extends Error {


    constructor(

        public readonly statusCode: number,
        public readonly message: string

    ){

        super();
    }

    static badRequest(message: string) {

        return new CustomErrors(400, message);
 
     }
 
     static notFound( message: string ) {
 
         return new CustomErrors(404, message);
 
     }
 
     static internalServerError(message: string) {
 
         return new CustomErrors(500, message)
 
     }
 


}