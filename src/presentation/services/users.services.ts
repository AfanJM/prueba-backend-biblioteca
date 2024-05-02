import { CreateUserDto, UpdateUserDto } from "../../domain/dtos/users";
import { userModel } from "../../data/mongo/models/user.models";
import { CustomErrors } from "../../domain/errors/customErrors";
import { validators } from "../../config/validators";
export class USerServices {



    async getAll() {

        try {

            const user = await userModel.find()
            .populate('books')
    
            return {
                status: "ok",
                data: { user }
            }


        } catch (error) {

            console.log(error)

            throw CustomErrors.internalServerError(`${error}`)

        }

    }

    async getById(id: string) {

        try {
            
            const user = await userModel.findById(id)
            .populate('books')

            if(!user) throw CustomErrors.notFound(`user:  ${id} not found`)

            return {
                data: { user }
            }
        } catch (error) {
            
            

            throw error;
        }
       
    }

    async create(dto: CreateUserDto) {

        try {

            const user = new userModel(dto);

            user.save();

            return {
                data: { user }
            }

        } catch (error) {

          

            throw CustomErrors.internalServerError(`${error}`)

        }


    }

    async Updated(id: string, dto: UpdateUserDto){

        try{

            const user = await userModel.findByIdAndUpdate(id, {
                name: dto.name,
                email: dto.email,
                password: dto.password
            })

            if(!user) throw CustomErrors.notFound("user not found");

            return {msg: 'User updated successfully'}

        }catch(error){

            console.log(error)

            throw CustomErrors.internalServerError(`${error}`)
        }

       

    }


    async delete(id: string){

        try{
        
        const user = await userModel.findByIdAndDelete(id)

        if(!user) throw CustomErrors.notFound(`user: ${id} not found`);

        return {msg: "user deleted successfully"}

        }catch(error){

             //console.error(error)

            throw error

        }


    }


}