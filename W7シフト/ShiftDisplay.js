/*******************************************************************
***  File Name    : ShiftDisplay.js
***  Version      : V1.5
***  Designer     : 吹谷　優太
***  Date         : 2022.7.11
***  Purpose      : シフト情報を更新・参照する
*******************************************************************/

import {AskJobs, UpdateJobs} from "/MainJobs.js";

const userinfo = window.location.search.replace("?","");   //URLパラメータを取得する
var userinfo2 = userinfo.split(",");                       //取得したURLパラメータを","で区切る
const year = userinfo2[1];                                 //入力する年
const month = userinfo2[2];                                //入力する月

/********************************************************* 
***function name  : ShiftData_init
***Designer       : 吹谷　優太
***Date           : 2022.7.11
***Function       : シフト設定処理部へデータを受け取り画面に反映する
**********************************************************/
function ShiftData_init(){
      var shiftdata = AskJobs("Shift_UI", year, month);   //シフト設定処理部に収支系情報の問い合わせ
      document.getElementById("JobName").placeholder = shiftdata[0];   //アルバイト名
      document.getElementById("HourWages").placeholder = shiftdata[1];   //時給
      document.getElementById("TrasCosts").placeholder = shiftdata[2];   //交通費
      document.getElementById("NightWages").placeholder = shiftdata[3];   //深夜給
      document.getElementById("Overtime").placeholder = shiftdata[4];   //残業代
      document.getElementById("NightWages_time_s").value = shiftdata[5];   //深夜給になる時間帯の始まり
      document.getElementById("NightWages_time_f").value = shiftdata[6];   //深夜給になる時間帯の終わり
}
window.onload = ShiftData_init;

/******************************************************
***function name  : ShiftData_update
***Designer       : 吹谷　優太
***Date           : 2022.7.11
***Function       : シフト設定処理部へ入力されたデータを送る
*******************************************************/

export function ShiftData_update(){
      var shiftdata = [];
      shiftdata.push(document.getElementById("JobName").value);              //アルバイト名
      if (shiftdata[0] == ""){
            shiftdata[0] = document.getElementById("JobName").placeholder;
      }
      shiftdata.push(document.getElementById("HourWages").value);         //時給
      if (shiftdata[1] == ""){
            shiftdata[1] = document.getElementById("HourWages").placeholder;
      }
      shiftdata.push(document.getElementById("TrasCosts").value);            //交通費
      if (shiftdata[2] == ""){
            shiftdata[2] = document.getElementById("TrasCosts").placeholder;
      }
      shiftdata.push(document.getElementById("NightWages").value);           //深夜給
      if (shiftdata[3] == ""){
            shiftdata[3] = document.getElementById("NightWages").placeholder;
      }
      shiftdata.push(document.getElementById("Overtime").value);             //残業代
      if (shiftdata[4] == ""){
            shiftdata[4] = document.getElementById("Overtime").placeholder;
      }
      shiftdata.push(document.getElementById("NightWages_time_s").value);    //深夜給になる時間帯の始まり
      shiftdata.push(document.getElementById("NightWages_time_f").value);    //深夜給になる時間帯の終わり
      var countstr = shiftdata[0].length;
      var count = 0;
      if (shiftdata[0] == ""){
            shiftdata[0] = "アルバイト1";
      }
      for (var i = 1; i < 5; i++){
            if (shiftdata[i].match(/^[0-9]+$/)){
                  count++;
            }
            if (shiftdata[i] == ""){
                  shiftdata[i]=0;
            }
      }
      if (count == 4 && countstr <= 32){
            UpdateJobs(shiftdata, "Shift_UI");   //シフト設定処理部に収支系の情報をを送る
            if (localStorage.getItem("Week") != null){
                  UpdateJobs(localStorage.getItem("Week"), "WeekShift_UI");
            }
            if (localStorage.getItem("Month") != null){
                  UpdateJobs(localStorage.getItem("Month"), "MonthShift_UI");
            }
            RemoveData();
            window.location.href="./MainDisplay.html"+location.search;
      } else if (countstr > 32){
            alert("アルバイト名は32文字以内で入力してください");
      } else {
            alert("給料情報は半角数字で入力してください");
      }
}
window.ShiftData_update=ShiftData_update;

/******************************************************
***function name  : RemoveData
***Designer       : 吹谷　優太
***Date           : 2022.7.11
***Function       : ローカルストレージ内のデータを削除する
*******************************************************/
export function RemoveData(){
      localStorage.removeItem("Week");
      localStorage.removeItem("Month");
}
window.RemoveData=RemoveData;
