const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

window.onload = function () {
    createId();
    showProcess(today, calendar);
};

function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

function createProcess(year, month) {
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

    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                count++;
                calendar += "<td onclick='showProcess2(" + year + "," + (month+1) + "," + count +")'>" + count + "</td>"
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}
/*
function clickBtn(){
    const start = prompt("開始時刻","9:00");
    if(start==null) return;
    const end = prompt("終了時刻","18:00");
    if(end==null) return;

}*/

function showProcess2(year, month, day) {
    document.getElementById("Shift").classList.add("Shift-after");
    var calender2 = createProcess2(year, month, day);
    document.querySelector('#Shift').innerHTML = calender2;
}

function createProcess2(year, month, day) {
    var startId = "monthshift_" + day + "_s";
    var endId = "monthshift_" + day + "_f"
    var calender2 = "<h2>" + month + "月 "+ day + "日"+ "</h2>";
    calender2 += "<tr><br>開始時刻" + "<input type='time' id=" + startId + ">";
    calender2 += "<br><br>終了時刻" + "<input type='time' id="+ endId+ ">";
    calender2 += "</tr>";
    return calender2;
}

function back(){
    alert(document.getElementById("monthshift_25_s").value);
    //window.close();
}

function createId() {
    var calender3 = "";
    alert("check1");
    for (let i=1; i<=31; ++i) {
        var temp1 = "monthshift_" + i + "_s";
        var temp2 = "monthshift_" + i + "_f";
        calender3 += "<div id=" + temp1 + "></div>"
        calender3 += "<div id=" + temp2 + "></div>"
    }
    document.querySelector('#shiftmonth').innerHTML = calender3;
}