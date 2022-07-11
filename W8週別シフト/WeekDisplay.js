import {AskJobs} from "./MainJobs.js";           //シフト設定処理部
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
const year = userinfo2[1];
const month = userinfo2[2];
/*****************************************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :現在カレンダーに反映しているシフト時間をシフト設定画面に反映する
*******************************************************************/

function Week_DataInit(){
    var startId;
    var endId;
    var week = localStorage.getItem("Week");                        //ローカルストレージに問い合わせ
    var week_name = ["sun", "mon", "tue", "wed", "thu", "fri", "sut"];   //曜日の配列
    if (week == null){
        var weekshift = AskJobs("WeekShift_UI", year, month);       //週間シフト情報をシフト設定処理部に問い合わせ
        for (var i = 0; i < 7; i++){
            startId = "weekshift_" + week_name[i] + "_s";
            endId = "weekshift_" + week_name[i] + "_f";
            document.getElementById(startId).value = weekshift[i*2];  //日曜日から土曜日の深夜給になる時間帯の始まり
            document.getElementById(endId).value = weekshift[i*2+1];  //日曜日から土曜日の深夜給になる時間帯の終わり
        }
    } else {
        var week2 = week.split(",");
        var weekshift = AskJobs("WeekShift_UI", year, month);       //週間シフト情報をシフト設定処理部に問い合わせ
        for (var i = 0; i < 7; i++){
            startId = "weekshift_" + week_name[i] + "_s";
            endId = "weekshift_" + week_name[i] + "_f";
            document.getElementById(startId).value = week2[i*2];  //日曜日から土曜日の深夜給になる時間帯の始まり
            document.getElementById(endId).value = week2[i*2+1];  //日曜日から土曜日の深夜給になる時間帯の終わり
        }
    }
}
window.onload = Week_DataInit;
     
/*******************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :シフト設定処理部に週別シフト情報を送る
********************************************/
function Week_DataSave(){
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