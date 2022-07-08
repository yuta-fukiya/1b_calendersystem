import {AskTimeTableJob, UpdateTimeTableJob} from "/TimeTableMain.js";

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];

function TimeTableDetails_init(){
    var timetabledata = AskTimeTableJob(wday,period);
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
    
    UpdateTimeTableJob(timetabledata);

    window.location.href="./timetable.html?" + id;
}
window.TimeTableDetails_update=TimeTableDetails_update;

