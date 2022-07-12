/******************************************************
***File Name      :timetable.js
***Date           :2022.7.12
***Designer       :木野内　健人
***Purpose        :時間割を作成し，出力する
*******************************************************/

import {AskTimeTableJob} from "./TimeTableMain.js";

var id = window.location.search.replace("?","");

const week = ["日", "月", "火", "水", "木", "金", "土"];

window.onload = function () {
    showtimetable();
}


/******************************************************
***function name  :showtimetable
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :時間割を出力
*******************************************************/

function showtimetable () {
    var timetable = createTimeTable();
    document.querySelector('#timetable').innerHTML = timetable;
}


/******************************************************
***function name  :createTimeTable
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :時間割を作成
*******************************************************/

function createTimeTable(){
    var timetable = "<table><tr calss='timetabletitle'>";
    // 最上段部分
    timetable += "<th id='per'>時限</th>";
    for(var i=0;i<week.length;i++){
        timetable += "<th class='day'>" + week[i] + "</th>";
    }
    // 1~7限までの要素
    timetable += "</tr>";
    for(var i=1;i<=7;i++){
        timetable += "<tr><th id='per'>" + i + "限</th>";
        for(var j=1;j<=7;j++){
            timetable += "<th id='class'>";
            var timeTable = AskTimeTableJob(j,i);
            timetable += "<a href = './timetabledetail.html?" + id + ","+j+","+i+"'>" + timeTable[0] + "<br>" + timeTable[1] + "教室<br>" + timeTable[2] + "単位<br>" + timeTable[3] + "";
            timetable += "</th>";
        }
        timetable += "</tr>";
    }
    timetable += "</table>"
    return timetable;
}
