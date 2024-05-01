import { envs } from "./config/env-adapter";

import { Server } from "./presentation/server";

import { AppRoutes } from "./presentation/routes";

import { MongoConnection } from "./data/mongo/models/mongo-connect";

(() => {


    main();

}) ();


async function main () {


    await MongoConnection.connect({

        dbName: envs.MONGO_BD_NAME,
        mongoUrl: envs.MONGO_URL
        
    });


    const server = new Server({

        port: envs.PORT,
        routes: AppRoutes.appRoutes

    });

    server.start();
}
