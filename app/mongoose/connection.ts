import * as mongoose from 'mongoose';

class MongoConnection {
    url: string = '';

    constructor(url: string) {
        this.url = url;
        mongoose.connection.on('connected', this.messageConnected);
        mongoose.connection.on('disconnected', this.reconnect);
    }
    async connect(): Promise<void> {
        await mongoose.connect(this.url);
        return;
    }
    messageConnected(){
        console.log(`Mongo connected on ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_SCHEMA}`)
    }
    reconnect(){
        console.log('Mongo has desconnected');
        this.connect();
    }
}


const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_SCHEMA}`
const mongoConnection = new MongoConnection(url);

export default mongoConnection;
