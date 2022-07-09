import { AskSchedule } from "./MainSchedule.js";

var xhr = new XMLHttpRequest();
var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
function expense() {
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("expense");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.responseText;
    }
    if (result == "false") {
        alert("通信に失敗しました");
    }
    return result;
}        

function income() {
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("income");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.responseText;
    }
    if (result == "false") {
        alert("通信に失敗しました");
    }
    return result;
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
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";
    document.querySelector('#price').innerHTML = "収支：" + (income() - expense()) + "円"

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

export function displaySchedule(year, month, day){
    var schedule = createSchedule(year, month, day);
    document.querySelector('#schedule').innerHTML = schedule;
}window.displaySchedule = displaySchedule;

function createSchedule(year, month, day){
    month += 1;
    var schedule = "<h2>"+month+"月"+day+"日"+"の予定"+"</h2>"+"<table><tr class = 'timeTable'>";
    /*ここらへんで予定情報，時間を取得する*/
    var infomation = AskSchedule("Schedule_UI");

    var size = infomation.length;


    for(var j = 0; j < size; j++){
        schedule += "<th>";
        for(var i = 0; i < 1; i++){
            schedule += "<td>"+infomation[i]+"</td>";
        }
        schedule += "</th>"
    }

    schedule += "<a class ='schedule' href = 'daySchedule.html?"+"year="+year+"&month="+month+"&day="+day+"''>新たな予定を設定</a><br>"
    schedule += "<a class ='shift' href = 'ShiftDisplay.html?" + id +","+year+","+month+ "'>新たなシフトを設定</a><br>"
    schedule += "<a class ='timetable' href = 'timetable.html?" + id + "'>新たな時間割を設定</a><br>"
    return schedule;
}