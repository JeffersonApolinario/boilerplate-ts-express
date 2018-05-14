import { Document } from 'mongoose';

export default interface IPersonModel extends Document{
    name: string,
    birthDate: Date,
}