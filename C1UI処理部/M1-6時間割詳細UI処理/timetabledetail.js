/******************************************************
***File Name      :timetabledetail.js
***Date           :2022.7.12
***Designer       :木野内　健人
***Purpose        :スケジュール管理部へ個々の授業情報を送信する
*******************************************************/

import {AskTimeTableJob, UpdateTimeTableJob} from "/TimeTableMain.js";

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];


/******************************************************
***function name  :TimeTableDetails_init
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :画面からの入力を取得
*******************************************************/

function TimeTableDetails_init(){
    var timetabledata = AskTimeTableJob(wday,period);
    document.getElementById("Class").placeholder = timetabledata[0];
    document.getElementById("Classroom").placeholder = timetabledata[1];
    document.getElementById("Unit").placeholder = timetabledata[2];
    document.getElementById("Professor").placeholder = timetabledata[3];
}
window.onload = TimeTableDetails_init;


/******************************************************
***function name  :TimeTableDetails_update
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :画面からの入力をスケジュール管理部へ送信
*******************************************************/

export function TimeTableDetails_update(){
    var timetabledata = [];
    timetabledata.push(document.getElementById("Class").value); // 授業名を格納
    if(timetabledata[0] == ""){
        timetabledata[0] = document.getElementById("Class").placeholder;
    }
    timetabledata.push(document.getElementById("Classroom").value); // 教授名を格納
    if(timetabledata[1] == ""){
        timetabledata[1] = document.getElementById("Classroom").placeholder;
    }
    timetabledata.push(document.getElementById("Unit").value); // 単位数を格納
    if(timetabledata[2] == ""){
        timetabledata[2] = document.getElementById("Unit").placeholder;
    }
    timetabledata.push(document.getElementById("Professor").value); // 教授名を格納
    if(timetabledata[3] == ""){
        timetabledata[3] = document.getElementById("Professor").placeholder;
    }
    // エラー処理
    var classcou1 = timetabledata[0].length;
    var classcou2 = timetabledata[1].length;
    var classcou3 = timetabledata[3].length;
    var count = 0; 
    if(classcou1>20) {
        alert("授業名は２０文字以内で入力してください");
        count++
    }
    if(classcou2>20){
         alert("教室名は２０文字以内で入力してください");
        count++;
    }
    if(classcou3>20){
         alert("講師名は２０文字以内で入力してください");
        count++;
    }
    if(timetabledata[2]<=0 || timetabledata[2]>=100){
         alert("単位数の値が不正です");
        count++;
    }
    if(count==0) {
        UpdateTimeTableJob(timetabledata); // 時間割情報を送信
        window.location.href="./timetable.html?" + id;
    }
}
window.TimeTableDetails_update=TimeTableDetails_update;

