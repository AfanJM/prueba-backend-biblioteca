import mongoose from 'mongoose'

interface OptionsConnect {

    mongoUrl: string,
    dbName: string


}


export class MongoConnection {

    static async connect (options: OptionsConnect){

        const {mongoUrl, dbName} = options;


        try {

            await mongoose.connect(mongoUrl, {

                dbName: dbName
            });

            console.log("Connection sucessful");

        
        } catch (error) {
            
            console.log(error)
        }


    }


}