import { Request, Response } from "express"
import { USerServices } from "../services/users.services"
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos/users"
import { CustomErrors } from "../../domain/errors/customErrors"
import { validators } from "../../config/validators"


export class UserController {


    //DI: inyeccion de dependencia
    constructor(

        private readonly userService: USerServices
    ){

    }

    private handleError = (error: any, res: Response) => {

        if(error instanceof CustomErrors){

            return res.status(error.statusCode).json({msg: error.message})
       }

       //console.log(error)
       return res.status(500).json({msg: 'Interval server errors'})

    }

    getById = (req: Request, res: Response) => {

        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})

        this.userService.getById(id)
        .then(user => res.json(user))  
        .catch(error => this.handleError(error, res))
    }

    getAll = (req: Request, res: Response) => {

        this.userService.getAll()
        .then(users => res.json(users))
        .catch(error => this.handleError(error, res))
        

    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreateUserDto.create( req.body );

        if(error) return res.status(400).json({Error: error});

        this.userService.create(dto!)
        .then(album => res.json(album))
        .catch(error => this.handleError(error, res))

    }

    updated = (req: Request, res: Response )=> {

        const {id} = req.params

        const [error, dto] = UpdateUserDto.create( req.body )

        if(error) return res.status(400).json({msg: error})

        this.userService.Updated(id, dto!)
        .then(user => res.json(user))
        .catch(erro => this.handleError(error, res))


    }


    deleted = (req: Request, res: Response) => {

        const {id} = req.params

        if(!id || !validators.IsMongoId(id)) return res.status(400).json({error: 'id not valid'})

         this.userService.delete(id)
        .then(user => res.json(user))
        .catch(error => this.handleError(error, res))
    }


}