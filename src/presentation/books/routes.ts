import { Router } from "express";
import { BookController } from "./controller";
import { BookService } from "../services/book.services";

export class BookRouter {

    static get routes(): Router{

        const router = Router();

        const service = new BookService();

        const controller = new BookController( service );

        router.post('/create', controller.create)

        router.get('/', controller.getAll)

        router.get('/:id', controller.getById)

        router.delete('/:id', controller.delete)

        router.put('/:id', controller.updated)

        return router;


    }


}