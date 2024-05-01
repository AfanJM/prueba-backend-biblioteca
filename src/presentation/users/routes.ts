import { Router } from "express";
import { UserController } from "./controller";
import { USerServices } from "../services/users.services";

export class UserRouter{

    constructor(){}

    static get routes(): Router {


        const router = Router();

        const service = new USerServices();

        const controller = new UserController( service );

        router.get('/', controller.getAll)

        router.get('/:id', controller.getById)

        router.post('/create', controller.create)

        router.put('/:id', controller.updated)

        router.delete('/:id', controller.deleted)

        return router;

    }

}