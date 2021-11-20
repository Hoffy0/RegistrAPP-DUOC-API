import { Document } from 'mongoose';

export interface I_USER extends Document {
    token:     String;
    email:     String;
    rut:       String;
    name:      String;
    lastName:  String;
    sLastName?: String;
    password:  String;
}