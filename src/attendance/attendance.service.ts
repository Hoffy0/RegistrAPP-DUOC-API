import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { I_ATTENDANCE } from './interfaces/attendance.interface';
import { CreateAttendanceDTO } from './DTO/attendance.dto';

@Injectable()
export class AttendanceService {

    constructor(@InjectModel('Attendance') private _attendanceModel: Model<I_ATTENDANCE>){}
    
    ////////////////////////////// CREATE ///////////////////////////////////////
    async addAttendance(attendanceData: CreateAttendanceDTO): Promise<I_ATTENDANCE>{
        const attendance = await new this._attendanceModel(attendanceData);
        return await attendance.save();
    }

    ///////////////////////////// READ //////////////////////////////////////////
    async getAllAttendance(): Promise<I_ATTENDANCE[]>{
        const allAttendance = await this._attendanceModel.find();
        return allAttendance;
    }

    async getAttendance(uid): Promise<I_ATTENDANCE>{
        const attendance = await this._attendanceModel.findById(uid);
        return attendance;
    }

    ////////////////////////// UPDATE ////////////////////////////////////////
    async updateAttendance(uid, newDataAttendance: CreateAttendanceDTO): Promise<I_ATTENDANCE>{
        const updatedAttendance = await this._attendanceModel
            .findByIdAndUpdate(uid, newDataAttendance, {new: true});
        return updatedAttendance;
    }

    //////////////////////// DELETE ////////////////////////////////////////
    async deleteAttendance(uid): Promise<I_ATTENDANCE>{
        return await this._attendanceModel.findByIdAndDelete(uid);
    }
}
