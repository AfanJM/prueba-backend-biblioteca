import {Router} from 'express';
import { UserRouter } from './users/routes';
import { BookRouter } from './books/routes';
import { LoanRoutes } from './loan/routes';

export class AppRoutes {

static get appRoutes(): Router {

    const router = Router();

    router.use('/api/v1/users', UserRouter.routes )

    router.use('/api/v1/books', BookRouter.routes)

    router.use('/api/v1/loan', LoanRoutes.routes)

    return router;

}

}
