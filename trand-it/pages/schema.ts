import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

export default User;