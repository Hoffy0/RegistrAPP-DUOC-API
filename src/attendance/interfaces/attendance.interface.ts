import { Document } from 'mongoose';

export interface I_ATTENDANCE extends Document {
    idClass:         Number;
    teacher:         String;
    classCode:       String;
    section:         String;
    studentFullName: String;
    studentRut:      String;
    startTime:       Date;
    endTime:         Date;
}