import * as ask from "./AskTimeTable.js";
import * as update from "./UpdateTimeTable.js";

export function AskTimeTableJob(wday, period){
    var TimeTable = [];
        TimeTable.push(ask.CopyClass(wday, period));
        TimeTable.push(ask.CopyClassroom(wday, period));
        TimeTable.push(ask.CopyUnit(wday, period));
        TimeTable.push(ask.CopyProfessor(wday, period));
    return TimeTable;
}



export function UpdateTimeTableJob(timetabledata){
    update.SendClass(timetabledata[0]);
    update.sendClassroom(timetabledata[1]);
    update.sendUnit(timetabledata[2]);
    update.sendProfessor(timetabledata[3]);
}
