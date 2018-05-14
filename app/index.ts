import Server from './server';
import MongooseConnection from './mongoose/connection';

(async function(){
    await MongooseConnection.connect();
    Server.register();
    Server.listen();
})();
