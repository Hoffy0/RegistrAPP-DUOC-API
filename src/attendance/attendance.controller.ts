import { Controller, Get, Post, Put, Delete, Res, Body, Param, HttpStatus} from '@nestjs/common';

import { AttendanceService } from './attendance.service';
import { CreateAttendanceDTO } from './DTO/attendance.dto';

@Controller('attendance')
export class AttendanceController {

    constructor(
        private attendanceService: AttendanceService,
    ){}

    ////////////////////////////// CREATE ///////////////////////////////////////
    @Post('/add')
    async addAttendance(@Res() res, @Body() attendanceData: CreateAttendanceDTO){
        try {
            const attendance = await this.attendanceService.addAttendance(attendanceData);
            return res.status(HttpStatus.OK).json({
                message: 'Aggregated Assistance',
                attendance
            });
        } catch (err) {
            console.error(err)
        }
    }

    ////////////////////////////// READ ///////////////////////////////////////
    @Get('')
    async getAllAttendance(@Res() res){
        try {
            const allAttendance = await this.attendanceService.getAllAttendance();
            return res.status(HttpStatus.OK).json({
                message: 'List of Assistance',
                attendances: allAttendance
            });
        } catch (err) {
            console.error(err)
        }
    }

    @Get('/:uid')
    async getAttendance(@Res() res, @Param('uid') uid: String){
        try {
            // console.log(uid.length > 1);
            if(uid.length > 1){
                const attendance = await this.attendanceService.getAttendance(uid);
                return res.status(HttpStatus.OK).json({
                    message: "Attendance Found",
                    attendance
                });
            }
        } catch (err) {
            console.error(err)
        }
    }

    ////////////////////////////// UPDATE ///////////////////////////////////////
    @Put('/update/:uid')
    async updateAttendance(@Res() res, @Param('uid') uid, @Body() newDataAttendace: CreateAttendanceDTO){
        try {
            if(uid.length > 23 && uid.length <= 24){
                const newAttendance = await this.attendanceService.updateAttendance(uid, newDataAttendace)
                if(!newAttendance) throw new Error('UID is invalid or not found in the DB').message
                return res.status(HttpStatus.OK).json({
                    message: "Update Attendance",
                    attendanceUpdated: newAttendance
                });
            }else{
                throw new Error('UID is invalid or not found in the DB').message
            }
        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err,
                status: HttpStatus.BAD_REQUEST
            });
        }
    }

    ////////////////////////////// UPDATE ///////////////////////////////////////
    @Delete('/delete/:uid')
    async deleteAttendace(@Res() res, @Param('uid') uid){
        try {
            if(uid.length > 23 && uid.length <= 24){
                const attendanceDeleted = await this.attendanceService.deleteAttendance(uid);
                if(!attendanceDeleted) throw new Error('Not found attendance to delete')
            }else{
                throw new Error('UID is invalid or not found in the DB')
            }
        } catch (err) {
            console.error(err);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err,
                status: HttpStatus.BAD_REQUEST
            });
        }
    }
}
