/*******************************************************************
***  File Name    : WeekDisplay.js
***  Version      : V1.5
***  Designer     : 吹谷　優太
***  Date         : 2022.7.11
***  Purpose      : 週別シフト情報を参照・一時保存する
*******************************************************************/

import {AskJobs} from "./MainJobs.js";           //シフト設定処理部

const userinfo = window.location.search.replace("?","");          //URLパラメータを取得する
var userinfo2 = userinfo.split(",");        //取得したURLパラメータを","で区切る
const year = userinfo2[1];      //入力する年
const month = userinfo2[2];     //入力する月


/****************************************************************
***function name     : 無し
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : シフト情報の初期値を求める即時関数
*******************************************************************/
window.onload = function () {
    var week_shift = localStorage.getItem("Week");
    var week_shift2;
    if (week_shift == null){
        week_shift2 = AskJobs("WeekShift_UI", year, month);
    } else {
        week_shift2 = week_shift.split(",");
    } 
    Week_DataInit(week_shift2);
};

/****************************************************************
***function name     : Week_DataSave
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 現在カレンダーに反映しているシフト時間をシフト設定画面に反映する
*******************************************************************/
function Week_DataInit(week_shift){
    const week = ["日", "月", "火", "水", "木", "金", "土"];             //html 表示用配列
    const week2 = ["sun", "mon", "tue", "wed", "thu", "fri", "sut"];    //html 入力欄id用配列
    var calendar = "<table><tr>";
    var start;           //htmlの入力欄のid
    var end;             //htmlの入力欄のid

    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";
    calendar += "<tr class='time'>";
    for (var i = 0; i < week.length; i++) {
        if (week_shift[i*2]!=week_shift[i*2+1]){
            calendar += "<td class='exist'>";
        } else{
            calendar += "<td>";
        }
        start = "weekshift_" + week2[i] + "_s";
        end = "weekshift_" + week2[i] + "_f";
        calendar += "<input type='time' value='" + week_shift[i*2] + "' id='" + start + "'><br>～<br><input type='time' value='"+ week_shift[i*2+1] +"' id='" + end + "'></td>";
    }
    calendar += "</tr>";
    calendar += "</table>";
    document.querySelector('#calendar').innerHTML = calendar;
}
     
/*******************************************
***function name     : Week_DataSave
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : シフト設定処理部に週別シフト情報を送る
********************************************/
export function Week_DataSave(){
    var startId;
    var endId;
    var weekshift = [];   //週間シフト情報をまとめるための配列
    var week_name = ["sun", "mon", "tue", "wed", "thu", "fri", "sut"];   //曜日の配列
    for (var i = 0; i < 7; i++){
        startId = "weekshift_" + week_name[i] + "_s";
        endId = "weekshift_" + week_name[i] + "_f";
        weekshift.push(document.getElementById(startId).value);  //日曜日から土曜日の深夜給になる時間帯の始まり
        weekshift.push(document.getElementById(endId).value);    //日曜日から土曜日の深夜給になる時間帯の終わり
        if ( (weekshift[i*2] == weekshift[i*2+1]) && (weekshift[i*2] != "00:00") ){
            weekshift[i*2] = "00:00";
            weekshift[i*2+1] = "00:00";
        }
    }
    localStorage.setItem("Week", weekshift);
    window.close();
}
window.Week_DataSave=Week_DataSave;