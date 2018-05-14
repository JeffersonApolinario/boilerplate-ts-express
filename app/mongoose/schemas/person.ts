import * as mongoose from 'mongoose';

import IPersonModel from '../models/person';

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    birthDate: {
        type : Date,
        required : true
    }
});

export default mongoose.model<IPersonModel>('people', PersonSchema);

