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
        /**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/usuario"
 *     
 *                       
 * components:
 *   schemas:
 *     usuario:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario
 *           example: 607f1f77bcf86cd799439011
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *           example: John Doe
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           description: Contraseña del usuario (se recomienda no enviarla en el response)
 *         books:
 *           type: array
 *           description: Lista de IDs de los libros asociados al usuario
 *           items:
 *             type: string
 *             example: 607f1f77bcf86cd799439012
 */

  

        router.get('/:id', controller.getById)
        /**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a buscar
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: "#/components/schemas/usuario"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "User not found"
 *     
 * components:
 *   schemas:
 *     usuario:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario
 *           example: 6633c6331a2a6aab5d1d9030
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *           example: Juan Se
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: juanse@gmail.com
 *         password:
 *           type: string
 *           description: Contraseña del usuario (se recomienda no enviarla en el response)
 *         books:
 *           type: object
 *           description: Información del libro asociado al usuario
 *           properties:
 *             _id:
 *               type: string
 *               description: ID del libro
 *               example: 66329de661628b7506191ad7
 *             title:
 *               type: string
 *               description: Título del libro
 *               example: Cien años de soledad
 *             author:
 *               type: string
 *               description: Autor del libro
 *               example: Gabriel García Márquez
 *             year:
 *               type: integer
 *               description: Año de publicación del libro
 *               example: 1967
 *             ISBM:
 *               type: string
 *               description: Número de ISBM del libro
 *               example: "41536978292869"
 *             available:
 *               type: boolean
 *               description: Indica si el libro está disponible
 *               example: true
 */


        router.post('/create', controller.create)
        /**
 * @openapi
 * /api/v1/users/create:
 *   post:
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               books:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: "#/components/schemas/usuario"
 *      
 * components:
 *   schemas:
 *     usuario:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario
 *           example: 6633c6331a2a6aab5d1d9030
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *           example: Juan Se
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: juanse@gmail.com
 *         password:
 *           type: string
 *           description: Contraseña del usuario (se recomienda no enviarla en el response)
 *         books:
 *           type: string
 *           description: ID del libro asociado al usuario
 *           example: 66329de661628b7506191ad7
 */


        router.put('/:id', controller.updated)
        /**
 * @openapi
 * /api/v1/users/{id}:
 *   put:
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               books:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Usuario actualizado exitosamente"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "user not found"
 *       
 */


        router.delete('/:id', controller.deleted)
        /**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Usuario eliminado exitosamente"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "User not found"
 *      
 */


        return router;

    }

}