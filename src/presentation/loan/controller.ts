import {Request, Response} from 'express'
import { CreateLoanDto } from '../../domain'
import { LoanServices } from '../services/loan.services'
import { CustomErrors } from '../../domain/errors/customErrors'
import { validators } from '../../config/validators'

export class LoanController {


    //DI
    constructor(

        private readonly loanService: LoanServices

    ){}


    private handleError = (error: any, res: Response) => {

        if(error instanceof CustomErrors){

            return res.status(error.statusCode).json({msg: error.message})
       }

       //console.log(error)
       return res.status(500).json({msg: 'Interval server errors'})

    }

    getAll = (req: Request, res:Response) => {

        this.loanService.getAll()
        .then(loan => res.json(loan))
        .catch(error => this.handleError(error,res))
    }


    getById = (req: Request, res: Response) => {


        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})


        this.loanService.getById(id)
        .then(loan => res.json(loan))
        .catch(error => this.handleError(error, res)) 
        

    }

    create = (req: Request, res: Response) => {


        const [error, dto] = CreateLoanDto.create(req.body)

        if(error) return res.status(400).json( {error: error} )

        this.loanService.create(dto!)
        .then(loan => res.json(loan))
        .catch(error => this.handleError(error, res))

    }

    delete = (req: Request, res: Response) => {


        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})

        this.loanService.delete(id)
        .then(loan => res.json(loan))
        .catch(error => this.handleError(error, res))
    }

}