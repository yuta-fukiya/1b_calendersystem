import { AskDaySchedule, UpdateDaySchedule } from "/MainSchedule.js";

function scheduleData_update() {
    // URLを取得
    const url = new URL(window.location.href);

    // URLSearchParamsオブジェクトを取得
    const params = url.searchParams;

    // consoleに受け取ったパラメータを出力
    console.log(params);

    // パラメータから「username」を取得
    const month = params.get("month");
    const day = params.get("day");
    const year = params.get("year");
    var scheduledata = [];
    scheduledata.push(document.getElementById("title").value);              //アルバイト名
    if (scheduledata[0] == "") {
        scheduledata[0] = document.getElementById("title").placeholder;
    }
    scheduledata.push(document.getElementById("time_s").value);         //時給
    if (scheduledata[1] == "") {
        scheduledata[1] = document.getElementById("time_s").placeholder;
    }
    scheduledata.push(document.getElementById("time_e").value);            //交通費
    if (scheduledata[2] == "") {
        scheduledata[2] = document.getElementById("time_e").placeholder;
    }
    scheduledata.push(document.getElementById("memo").value);           //深夜給
    if (scheduledata[3] == "") {
        scheduledata[3] = document.getElementById("memo").placeholder;
    }
    scheduledata.push(document.getElementById("date").value);           //深夜給
    if (scheduledata[4] == "") {
        scheduledata[4] = year+","+month+","+day+",";
    }
    var countstr = scheduledata[0].length;
    var count = 0;
    if (scheduledata[0] == "") {
        scheduledata[0] = "予定1";
    }
    for (var i = 1; i < 5; i++) {
        if (scheduledata[i].match(/^[0-9]*$/)) {
            count++;
        }
        if (scheduledata[i] = "") {
            scheduledata[i] = 0;
        }
    }

    if (count == 4 && countstr < 32) {
        UpdateDaySchedule(scheduledata, "schedule_UI");   //シフト設定処理部に収支系の情報をを送る
        UpdateDaySchedule(localStorage.getItem("Week"), "Weekschedule_UI");
        // UpdateJobs(localStorage.setItem("Month"), "Monthschedule_UI");
        RemoveData();
        window.location.href = "./MainDisplay.html" + location.search;
    } else if (countstr > 32) {
        alert("アルバイト名は32文字以内で入力してください");
    } else {
        alert("給料情報は半角数字で入力してください");
    }
}
window.scheduleData_update = scheduleData_update;


//変更不要
export function RemoveData() {
    localStorage.removeItem("Week");
    // localStorage.removeItem("Month");
}
window.RemoveData = RemoveData;
