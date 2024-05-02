import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {Request, Response} from 'express'

const option = {
    definition:{
        openapi: "3.0.0",
        info: {title: "ApiBiblioteca", version: "1.0.0"},
    },
    apis:['src/presentation/users/routes.ts'],
}

export const swaggerSpec = swaggerJSDoc(option)

const swaggerDocs = (app: any, port: any) => {

    app.use('https://prueba-backend-biblioteca-production.up.railway.app/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get('https://prueba-backend-biblioteca-production.up.railway.app/api/v1/docs.json', (req: Request, res: Response) => {

        res.setHeader("Content-Type", "application/json")

        res.send(swaggerSpec)

    })

}

export default swaggerDocs

