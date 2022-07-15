import * as ask from "./AskSchedule.js";      //予定設定処理部
import * as update from "./UpdateSchedule.js";    //予定設定処理部

/*****************************************************************
***function name     :Askschedules
***Designer          :太田　篤
***Date              :
***function          :予定情報をデータ管理部に問い合わせる
 *******************************************************************/

export function AskSchedule(ProcessName, year, month, day){
    var Schedule = [];
    if (ProcessName == "Schedule_UI") {
        Schedule.push(ask.CopyTitle(year, month, day));
        Schedule.push(ask.CopyS_time(year, month, day));
        Schedule.push(ask.CopyE_time(year, month, day));
        Schedule.push(ask.CopyMemo(year, month, day));
    }
    return Schedule;
}

/*******************************************
***function name     :UpdateJobs
***Designer          :太田　篤
***Date              :
***function          :データ管理部に予定情報データを送る
********************************************/

export function UpdateSchedule(Scheduledata, ProcessName){
    if (ProcessName == "Schedule_UI") {
        update.SendTitle(Scheduledata[0]);
        update.SendS_Time(Scheduledata[1]);
        update.SendE_Time(Scheduledata[2]);
        update.SendMemo(Scheduledata[3]);
    }
    //alert("予定「"+Scheduledata[0]+"」を追加します");
}

