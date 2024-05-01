import {Request, Response} from 'express'
import { CustomErrors } from '../../domain/errors/customErrors'
import { CreateBookDto, UpdateBookDto } from '../../domain'
import { BookService } from '../services/book.services'
import { validators } from '../../config/validators'


export class BookController {

    constructor(

        private readonly bookService: BookService

    ){}


    private handleError = (error: any, res: Response) => {

        if(error instanceof CustomErrors){

            return res.status(error.statusCode).json({msg: error.message})
       }

       //console.log(error)
       return res.status(500).json({msg: 'Interval server errors'})

    }


    create = (req: Request, res: Response) => {

        const [error, dto] = CreateBookDto.create(req.body)

        if(error) return res.status(400).json({msg: error})

        this.bookService.create(dto!)
       .then(book => res.json(book))
       .catch(error => this.handleError(error, res))

    }
    
    getAll = (req: Request, res: Response) => {

        this.bookService.getAll()
        .then(books => res.json(books))
        .catch(error => this.handleError(error, res))

    }

    getById= (req: Request, res: Response) => {


        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})


        this.bookService.getById(id)
        .then(book => res.json(book))
        .catch(error => this.handleError(error, res))

    }

    updated = (req: Request, res:Response) =>{

        const {id} = req.params

        const [error, dto] = UpdateBookDto.create(req.body)

        if(error) return res.status(400).json({error: error})

        this.bookService.updated(id, dto!)
        .then(book => res.json(book))
        .catch(error => this.handleError(error, res))

        

    }

    delete = (req: Request, res: Response) => {

        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})

        this.bookService.delete(id)
        .then(book => res.json(book))
        .catch(error => this.handleError(error,res))

    }


}