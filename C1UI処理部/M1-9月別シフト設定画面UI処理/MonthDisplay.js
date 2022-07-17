/*******************************************************************
***  File Name    : MonthDisplay.js
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 月別シフト情報を参照・一時保存し、レイアウトを決める
*******************************************************************/

import {AskJobs} from "./MainJobs.js";  

const week = ["日", "月", "火", "水", "木", "金", "土"];
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
const year = userinfo2[1];
const month = userinfo2[2];
var showDate = new Date(year, month-1, 1);
var main_count = 0;

window.onload = function () {
    var month_shift = localStorage.getItem("Month");
    var month_shift2;
    if (month_shift == null){
        month_shift2 = AskJobs("MonthShift_UI", year, month);
    } else {
        month_shift2 = month_shift.split(",");
    } 
    showProcess(showDate, month_shift2);
};

function showProcess(date, month_shift) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month+1)+ "月";
    var calendar = createProcess(year, month, month_shift);
    document.querySelector('#calendar').innerHTML = calendar;
}

function createProcess(year, month, month_shift) {
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month+1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);
    var startId;
    var endId;
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) +"</td>";
            } else {
                startId = "monthshift_" + (main_count*2) + "_s";
                endId = "monthshift_" + (main_count*2+1) + "_f";
                if (month_shift[main_count*2]!=month_shift[main_count*2+1]){
                    calendar += "<td class='exist'>";
                } else if ( (month_shift[main_count*2] == month_shift[main_count*2+1]) && (month_shift[main_count*2] != "00:00") ){
                    calendar += "<td class='time'>";
                    month_shift[main_count*2] = "00:00";
                    month_shift[main_count*2+1] = "00:00";
                } else {
                    calendar += "<td class='time'>";
                }
                calendar += (count+1) +  "<br><input type='time' value='" + month_shift[main_count*2] + "' id='" + startId + "'><br>～<br><input type='time' value='"+ month_shift[main_count*2+1] +"' id='" + endId + "'></td>";
                count++;
                main_count++;
            }
        }
        calendar += "</tr>";
    }
    calendar += "</table>";

    return calendar;
}

export function back(){
    var MonthShift = [];
    var startId;
    var endId;
    for (var i=0; i<main_count; i++){
        startId = '#monthshift_' + (i*2) + '_s';
        endId = '#monthshift_' + ((i*2)+1) + '_f';
        MonthShift.push(document.querySelector(startId).value);
        MonthShift.push(document.querySelector(endId).value);
    }
    localStorage.setItem("Month", MonthShift);
    window.close();
}
window.back = back;