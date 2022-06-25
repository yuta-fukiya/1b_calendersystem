import {AskJobs, UpdateJobs} from "../M4シフト設定処理部/MainJobs.js";

/********************************************************* 
***function name  :ShiftData_init
***Designer       :吹谷　優太
***Date           :
***Function       :シフト設定処理部へデータを受け取り画面に反映する
**********************************************************/
function ShiftData_init(){
   var shiftdata = AskJobs("Shift_UI");   //シフト設定処理部に収支系情報の問い合わせ

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
***function name  :ShiftData_update
***Designer       :吹谷　優太
***Date           :
***Function       :シフト設定処理部へ入力されたデータを送る
*******************************************************/

export function ShiftData_update(){
   var shiftdata = [];
   shiftdata.push(document.getElementById("JobName").value);              //アルバイト名
   shiftdata.push(document.getElementById("HourWages").value);            //時給
   shiftdata.push(document.getElementById("TrasCosts").value);            //交通費
   shiftdata.push(document.getElementById("NightWages").value);           //深夜給
   shiftdata.push(document.getElementById("Overtime").value);             //残業代
   shiftdata.push(document.getElementById("NightWages_time_s").value);    //深夜給になる時間帯の始まり
   shiftdata.push(document.getElementById("NightWages_time_f").value);    //深夜給になる時間帯の終わり
   UpdateJobs(shiftdata, "Shift_UI");   //シフト設定処理部に収支系の情報をを送る
}

window.ShiftData_update=ShiftData_update;

//変更不要

