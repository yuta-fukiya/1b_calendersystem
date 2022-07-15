/*******************************************************************
***  File Name    : MainDisplay.js
***  Version      : V1.2
***  Designer     : 太田篤
***  Date         : 2022.7.11
***  Purpose      : カレンダーを作成，表示する
*******************************************************************/

import { AskSchedule } from "./MainSchedule.js";
import { AskJobs } from "./MainJobs.js";
import { AskSalary, SetIncome} from "/MainSalary.js";

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];

function ShiftData_init(year, month){　//収入，支出を得る関数
    var shiftdata = AskSalary(year, month);
    document.getElementById("income").value = shiftdata[0];
    document.getElementById("expense").value = shiftdata[1];
}


const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 初期表示
window.onload = function () {
    showProcess(today, calendar);
};
// 前の月表示
export function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}window.prev = prev;

// 次の月表示
export function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}window.next = next;

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();

    var day = new Date(year, month + 1, 0).getDate();
    SetIncome(year, month + 1, day);
    ShiftData_init(year, month + 1);

    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";
    document.querySelector('#price').innerHTML = "収支：" + (document.getElementById("income").value - document.getElementById("expense").value) + "円"

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;

    /*収支情報，支出情報を用意して表示する関数を作る
    var income = ;
    var expense = ;
    */ 
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if (year == today.getFullYear()
                    && month == (today.getMonth())
                    && count == today.getDate()) {
                    calendar += "<td class='today' onclick='displaySchedule("+year+","+month+","+count+")'>" + count + "</td>";
                } else {
                    calendar += "<td onclick='displaySchedule(" + year + "," + month + "," + count +")'>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}

export function displaySchedule(year, month, day){//スケジュールを表示
    var schedule = createSchedule(year, month, day);
    document.querySelector('#schedule').innerHTML = schedule;
}window.displaySchedule = displaySchedule;

function createSchedule(year, month, day){//スケジュール表示領域を作成
    month += 1;
    var schedule = "<h2>"+month+"月"+day+"日"+"の予定"+"</h2>"+"<table><tr class = 'timeTable'>";
    /*予定情報，時間を取得する*/
    var schedule_information = AskSchedule("Schedule_UI", year, month, day);
    var shift_information2 = AskJobs("WeekShift_UI", year, month);
    var shift_information = AskJobs("Shift_UI", year, month);
    var shift_information3 = AskJobs("MonthShift_UI", year, month); 

    var size = schedule_information.length;
    var number = [0, 1, 2, 3, 4, 5, 6];
    var date = new Date(year, month, day-3);
    var date1 = new Date(year, month, day);  
    var date2 = number[date.getDay()];
    var date3 = date1.getDate()-1;
    var shift_array = shift_information2;

    for(var j = 0; j < size; j++){
        schedule += "<th>";
        for(var i = 0; i < 1; i++){
            schedule += "<td>"+schedule_information[j]+"</td>";
        }
        schedule += "</th>"
    }

    schedule += "<table><tr class = 'timeTable'>"

    
    schedule+="<th>";
    schedule+="<td>"+shift_information[0]+"</td>";
    if (shift_information3[date3*2] == "00:00" && shift_information3[date3*2+1] == "00:00"){
        schedule+="<td>"+shift_array[date2*2]+"</td>";
        schedule += "<td>" + shift_array[date2*2+1] + "</td>";
    } else {
        schedule+="<td>"+shift_information3[date3*2]+"</td>";
        schedule+="<td>"+shift_information3[date3*2+1]+"</td>";
    }
    schedule+="</th>"

    schedule += "<a class ='schedule' href = 'daySchedule.html?id="+id+"&year="+year+"&month="+month+"&day="+day+"''>新たな予定を設定</a><br>"
    schedule += "<a class ='shift' href = 'ShiftDisplay.html?" + id +","+year+","+month+ "'>新たなシフトを設定</a><br>"
    schedule += "<a class ='timetable' href = 'timetable.html?" + id + "'>新たな時間割を設定</a><br>"
    return schedule;
}