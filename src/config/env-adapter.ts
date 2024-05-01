import {get} from 'env-var';
import 'dotenv/config';

export const envs = {


    PORT: get('PORT').required().asPortNumber(),
    MONGO_BD_NAME: get('MONGO_BD_NAME').required().asString(),
    MONGO_URL: get('MONGO_URL').required().asString(),


}