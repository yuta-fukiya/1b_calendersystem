import {AskTimeTableJob} from "./TimeTableMain.js";

var id = window.location.search.replace("?","");

const week = ["日", "月", "火", "水", "木", "金", "土"];

window.onload = function () {
    showtimetable();
}

function showtimetable () {
    var timetable = createTimeTable();
    document.querySelector('#timetable').innerHTML = timetable;
}

function createTimeTable(){
    var timetable = "<table><tr calss='timetabletitle'>";
    timetable += "<th id='per'>時限</th>";
    for(var i=0;i<week.length;i++){
        timetable += "<th class='day'>" + week[i] + "</th>";
    }
    timetable += "</tr>";
    for(var i=1;i<=7;i++){
        timetable += "<tr><th id='per'>" + i + "限</th>";
        for(var j=1;j<=7;j++){
            timetable += "<th id='class'>";
            var timeTable = AskTimeTableJob(j,i);
            timetable += "<a href = './timetabledetail.html?" + id + ","+j+","+i+"'>" + timeTable[0] + "<br>" + timeTable[1] + "コマ<br>" + timeTable[2] + "単位<br>" + timeTable[3] + "";
            timetable += "</th>";
        }
        timetable += "</tr>";
    }
    timetable += "</table>"
    return timetable;
}
