import {AskTimeTableJob} from "./TimeTableMain.js";

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
    timetable += "<th>時限</th>";
    for(var i=0;i<week.length;i++){
        timetable += "<th>" + week[i] + "</th>";
    }
    timetable += "</tr>";
    for(var i=1;i<=7;i++){
        timetable += "<tr><th>" + i + "限</th>";
        for(var j=1;j<=7;j++){
            timetable += "<th>";
            var timeTable = AskTimeTableJob(j,i);
            timetable += "<a href = 'timetable.html?" + "wday"+j+"period"+i+"''>" + timeTable[0] + "\n" + timeTable[1] + "\n" + timeTable[2] + "\n" + timeTable[3] + "</a>";
            timetable += "</th>";
        }
        timetable += "</tr>";
    }
    timetable += "</table>"
    return timetable;
}
