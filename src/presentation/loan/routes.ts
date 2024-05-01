import { Router } from "express";
import { LoanController } from "./controller";
import { LoanServices } from "../services/loan.services";



export class LoanRoutes{


    constructor(){}


    static get routes(): Router {

        const router = Router()

        const service = new LoanServices()

        const controller = new LoanController(service)

        router.get('/', controller.getAll)

        router.get('/:id', controller.getById)

        router.post('/create', controller.create)

        router.delete('/:id', controller.delete)

        return router


    }



}