import { CreateBookDto, UpdateBookDto } from "../../domain";
import { BookModel } from "../../data/mongo/models/book.models";
import { CustomErrors } from "../../domain/errors/customErrors";
import { validators } from "../../config/validators";

export class BookService {

    constructor(){}

    async getAll(){


        try{

            const books = await BookModel.find()

            return {
                data: {books}
            }

        }catch(error){

            console.log(error)

            throw CustomErrors.internalServerError(`${error}`)

        }

    }

    async getById(id: string){

        try{

            const book = await BookModel.findById(id)

            if(!book) throw CustomErrors.notFound(`The book with id: ${id} not found`)

            return {
                data: {
                    book
                }
            }

        }catch(error){
            
            throw error
        }

    }

    async create(dto: CreateBookDto) {

        try {
            
            const book = new BookModel(dto)

            book.save();

            return{
                data: {book}
            }

        } catch (error) {
            
            console.log(error)

            throw  CustomErrors.internalServerError(`${error}`)

        }
        
    }

    async delete(id: string){

        try{

            const book = await BookModel.findByIdAndDelete(id)

            if(!book) throw CustomErrors.notFound(`The book with id: ${id} not found`)

            if(!validators.IsMongoId(id)) throw CustomErrors.badRequest("The id is not valid");

            return {msg: "Book successfully deleted"}

        }catch(error){

            throw  error

        }


    }

    async updated (id: string, dto: UpdateBookDto){

        try{

            const book = await BookModel.findByIdAndUpdate(id, {

                title: dto.title,
                author: dto.author,
                ISBM: dto.ISBM,
                available: dto.available
            })

            if(!book) throw CustomErrors.notFound(`The book with id: ${id} not found`)

            return {msg: "Book successfully updated"}

        }catch(error){

            console.log(error)

            throw  CustomErrors.internalServerError(`${error}`)

        }


    }

    



}