export class CreateAttendanceDTO {
    idClass:         Number;
    teacher:         string;
    classCode:       string;
    section:         string;
    studentFullName: string;
    studentRut:      string;
    startTime:       Date;
    endTime:         Date;
}