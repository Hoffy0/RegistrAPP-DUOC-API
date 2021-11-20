import { Schema } from 'mongoose';

export const AttendanceSchema = new Schema({
    idClass: {
        type: Number,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    studentFullName: {
        type: String,
        required: true
    },
    studentRut: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }

});