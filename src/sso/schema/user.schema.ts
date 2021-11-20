import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rut: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    sLastName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
});