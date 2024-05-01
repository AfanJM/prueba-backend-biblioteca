import { CreateLoanDto } from "../../domain";
import { LoanModel } from "../../data/mongo/models/loan.models";
import { CustomErrors } from "../../domain/errors/customErrors";
import { validators } from "../../config/validators";


export class LoanServices {


    constructor(){}



    async create(dto: CreateLoanDto){

        try {
            
            const loan = new LoanModel({
                users: dto.users,
                books: dto.books,
                date: new Date()

            })

            loan.save();

            return {

                data:{loan}
            }


        } catch (error) {
            
            console.log(error)

            throw CustomErrors.internalServerError(`${error}`)

        }
    }

    async getAll(){

        try{

            const loan = await LoanModel.find()
            .populate('users')
            .populate('books')
    
            return {

                data: {loan}
            }

        }catch(error){

            console.log(error)

            throw CustomErrors.internalServerError(`${error}`)

        }

    }

    async getById(id: string){

        try {

            const loan = await LoanModel.findById(id)
            .populate('users')
            .populate('books')

            if(!loan) throw CustomErrors.notFound(`The loan with id: ${id} not found`);

            if(!validators.IsMongoId(id)) throw CustomErrors.badRequest("The loan id is not valid");

            return {

                data: {loan}

            }

        }catch(error){

    
            throw error

        }
    }

    async delete(id: string){

        try{

            const loan = await LoanModel.findByIdAndDelete(id)

            if(!loan) throw CustomErrors.notFound(`The loan with id: ${id} not found`);

            if(!validators.IsMongoId(id)) throw CustomErrors.badRequest("The loan id is not valid");

            return {msg: 'Loan successfully deleted'}

        }   catch(error){

            throw error


        }   

    }



}