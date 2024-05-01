import express, {Router} from 'express';

interface OptionsServer {

    port: number,
    routes: Router

};


export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;


    constructor(options: OptionsServer) {

        const {port, routes} = options;

        this.port = port;
        this.routes = routes;  
    }


    async start(){


        //middlewares
        this.app.use(express.json());

        //routes
        this.app.use(this.routes);

        //listen
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });


    }


}