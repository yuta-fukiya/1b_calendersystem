import {AskTimetableJob, UpdateTimeTableJob} from "/TimeTableMain.js";


function TimeTableDetails_init(){
    var timetabledata = AskTimetableJob();
    document.getElementById("Class").paceholder = timetabledata[0];
    document.getElementById("NumClasses").paceholder = timetabledata[1];
    document.getElementById("Unit").paceholder = timetabledata[2];
    document.getElementById("Professor").paceholder = timetabledata[3];
}
window.onload = TimeTableDetails_init;

export function TimeTableDetails_update(){
    var timetabledata = [];
    timetabledata.push(document.getElementById("Class").value);
    if(timetabledata[0] == ""){
        timetabledata[0] = document.getElementById("Class").Placeholder;
    }
    timetabledata.push(document.getElementById("NumClasses").value);
    if(timetabledata[1] == ""){
        timetabledata[1] = document.getElementById("NumClasses").Placeholder;
    }
    timetabledata.push(document.getElementById("Unit").value);
    if(timetabledata[2] == ""){
        timetabledata[2] = document.getElementById("Unit").Placeholder;
    }
    timetabledata.push(document.getElementById("Professor").value);
    if(timetabledata[3] == ""){
        timetabledata[3] = document.getElementById("Professor").Placeholder;
    }
    var countstr = timetabledata[0].length;
    UpdateTimeTableJob(timetabledata);
}
window.TimeTableDetails_update=TimeTableDetails_update;

