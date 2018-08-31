import * as mongoose from 'mongoose';

class MongoConnection {
    url: string = '';

    constructor(url: string) {
        this.url = url;
        mongoose.connection.on('connected', () => {
            console.log(`Mongo connected on ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_SCHEMA}`);            
        });
        mongoose.connection.on('disconnected', () => {
            console.log('Mongo has desconnected');
            this.connect();
        });
    }
    async connect(): Promise<void> {
        await mongoose.connect(this.url);
        return;
    }
}

const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_SCHEMA}`;

export default new MongoConnection(url);
