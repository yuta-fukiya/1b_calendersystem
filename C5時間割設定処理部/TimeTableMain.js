import * as ask from "./AskTimeTable.js";
import * as update from "./UpdateTimeTable.js";

export function AskTimeTableJob(wday, period){
    var TimeTable = [];
        TimeTable.push(ask.CopyClass(wday, period));
        TimeTable.push(ask.CopyNumClasses(wday, period));
        TimeTable.push(ask.CopyUnit(wday, period));
        TimeTable.push(ask.CopyProfessor(wday, period));
        TimeTable.push(ask.Copywday(wday, period));
        TimeTable.push(ask.Copyperiod(wday, period));
    return TimeTable;
}



export function UpdateTimeTableJob(timetabledata){
    update.SendClass(timetabledata);
    update.sendNumClasses(timetabledata);
    update.sendUnit(timetabledata);
    update.sendProfessor(timetabledata);
    update.sendwday(timetabledata);
    update.sendperiod(timetabledata);
}
