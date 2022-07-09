import * as ask from "./AskSchedule.js";      //予定設定処理部
import * as update from "./UpdateSchedule.js";    //予定設定処理部

/*****************************************************************
***function name     :Askschedules
***Designer          :太田　篤
***Date              :
***function          :予定情報をデータ管理部に問い合わせる
 *******************************************************************/

export function AskSchedule(ProcessName){
    var Schedule = [];
    if (ProcessName == "Schedule_UI") {
        Schedule.push(ask.CopyTitle());
        Schedule.push(ask.CopyS_time());
        Schedule.push(ask.CopyE_time());
        Schedule.push(ask.CopyMemo());
    }
    return Schedule;
}

/*******************************************
***function name     :UpdateJobs
***Designer          :太田　篤
***Date              :
***function          :予定情報をに週別予定のデータを送る
********************************************/

export function UpdateSchedule(Scheduledata, ProcessName){
    if (ProcessName == "Schedule_UI") {
        update.SendTitle(Scheduledata[0]);
        update.SendS_Time(Scheduledata[1]);
        update.SendE_Time(Scheduledata[2]);
        update.SendMemo(Scheduledata[3]);
    }
}

