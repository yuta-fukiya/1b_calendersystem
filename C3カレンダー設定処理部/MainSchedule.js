import * as ask from "./AskScheduleData.js";      //予定設定処理部
import * as update from "./UpdateScheduleData.js";    //予定設定処理部

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
        Schedule.push(ask.CopyDate());
    }
    return Schedule;
}

/*******************************************
***function name     :UpdateJobs
***Designer          :太田　篤
***Date              :
***function          :予定情報をに週別予定のデータを送る
********************************************/

export function UpdateSchedules(Scheduledata, ProcessName){
    if (ProcessName == "Schedule_UI") {
        update.SendTitle(Scheduledata[0]);
        update.SendS_Time(Scheduledata[1]);
        update.SendE_minute(Scheduledata[2]);
        update.SendMemo(Scheduledata[3]);
        update.SendDate(Scheduledata[4]);
    }
}

