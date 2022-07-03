import * as ask from "./AskTimeTable";
import * as update from "./UpdateTimeTable";

export function AskTimeTableJob(ProcessName){
    var TimeTable = [];
    if(ProcessName == "TimeTable_UI") {
        TimeTable.push(ask.CopyClass());
        TimeTable.push(ask.CopyNumClasses());
        TimeTable.push(ask.CopyUnit());
        TimeTable.push(ask.CopyProfessor());
    }
    return TimeTable;
}



export function UpdateTimeTableJob(timetabledata){
    update.SendClass(timetabledata[0]);
    update.sendNumClasses(timetabledata[1]);
    update.sendUnit(timetabledata[2]);
    update.sendProfessor(timetabledata[3]);
}
