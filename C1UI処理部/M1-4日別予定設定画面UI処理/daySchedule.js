/*******************************************************************
***  File Name    : daySchedule.js
***  Version      : V1.2
***  Designer     : 太田篤
***  Date         : 2022.7.11
***  Purpose      : 入力されたスケジュール情報を更新する．
*******************************************************************/

import { UpdateSchedule } from "./MainSchedule.js";

export function scheduleData_update() {
    // URLを取得
    const url = new URL(window.location.href);

    // URLSearchParamsオブジェクトを取得
    const params = url.searchParams;

    // consoleに受け取ったパラメータを出力
    console.log(params);
    const id = params.get("id");
    const year = params.get("year");
    const month = params.get("month");
    
    // パラメータから「username」を取得
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

    UpdateSchedule(scheduledata, "Schedule_UI");   //カレンダー設定処理部に収支系の情報をを送る
    RemoveData();
    window.location.href = "./MainDisplay.html?" + id + "," + year + "," + month;
}

window.scheduleData_update = scheduleData_update;


//変更不要
export function RemoveData() {
    localStorage.removeItem("Week");
    // localStorage.removeItem("Month");
}
window.RemoveData = RemoveData;
