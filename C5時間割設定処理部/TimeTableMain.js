import * as ask from "./AskTimeTable.js";
import * as update from "./UpdateTimeTable.js";

export function AskTimeTableJob(){
    var TimeTable = [];
        TimeTable.push(ask.CopyClass());
        TimeTable.push(ask.CopyNumClasses());
        TimeTable.push(ask.CopyUnit());
        TimeTable.push(ask.CopyProfessor());
        TimeTable.push(ask.Copywday());
        TimeTable.push(ask.Copyperiod());
    return TimeTable;
}



export function UpdateTimeTableJob(timetabledata){
    update.SendClass(timetabledata[0]);
    update.sendNumClasses(timetabledata[1]);
    update.sendUnit(timetabledata[2]);
    update.sendProfessor(timetabledata[3]);
}
