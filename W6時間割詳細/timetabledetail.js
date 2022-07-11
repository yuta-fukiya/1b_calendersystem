import {AskTimeTableJob, UpdateTimeTableJob} from "/TimeTableMain.js";

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];

function TimeTableDetails_init(){
    var timetabledata = AskTimeTableJob(wday,period);
    document.getElementById("Class").placeholder = timetabledata[0];
    document.getElementById("Classroom").placeholder = timetabledata[1];
    document.getElementById("Unit").placeholder = timetabledata[2];
    document.getElementById("Professor").placeholder = timetabledata[3];
}
window.onload = TimeTableDetails_init;

export function TimeTableDetails_update(){
    var timetabledata = [];
    timetabledata.push(document.getElementById("Class").value);
    if(timetabledata[0] == ""){
        timetabledata[0] = document.getElementById("Class").placeholder;
    }
    timetabledata.push(document.getElementById("Classroom").value);
    if(timetabledata[1] == ""){
        timetabledata[1] = document.getElementById("Classroom").placeholder;
    }
    timetabledata.push(document.getElementById("Unit").value);
    if(timetabledata[2] == ""){
        timetabledata[2] = document.getElementById("Unit").placeholder;
    }
    timetabledata.push(document.getElementById("Professor").value);
    if(timetabledata[3] == ""){
        timetabledata[3] = document.getElementById("Professor").placeholder;
    }
    var classcou1 = timetabledata[0].length;
    var classcou2 = timetabledata[1].length;
    if(classcou1>20) alert("授業名は２０文字以内で入力してください");
    if(classcou2>20) alert("教室名は２０文字以内で入力してください");
    else if(timetabledata[2]<=0 || timetabledata[2]>=100) alert("単位数の値が不正です");
    else UpdateTimeTableJob(timetabledata);

    window.location.href="./timetable.html?" + id;
}
window.TimeTableDetails_update=TimeTableDetails_update;

