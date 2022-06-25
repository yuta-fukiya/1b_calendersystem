import * as ask from "../M4シフト設定処理部/AskShiftData.js";      //シフト設定処理部
import * as update from "../M4シフト設定処理部/UpdateShiftData.js";    //シフト設定処理部

/*****************************************************************
***function name     :AskJobs
***Designer          :吹谷　優太
***Date              :
***function          :シフト情報をデータ管理部に問い合わせる
 *******************************************************************/

export function AskJobs(ProcessName){
    var Shift = [];
    if (ProcessName == "Shift_UI") {
        Shift.push(ask.CopyJobName());
        Shift.push(ask.CopyHourWages());
        Shift.push(ask.CopyTrasCosts());
        Shift.push(ask.CopyNightWages());
        Shift.push(ask.CopyOvertime());
        var NightWages_time = ask.CopyNightWagesRange();
        Shift.push(NightWages_time[0]);
        Shift.push(NightWages_time[1]);
    } else if (ProcessName == "WeekShift_UI") {
        Shift = ask.CopyJobTime("WeekShift");
    } else if (ProcessName == "MonthShift_UI") {
        Shift = ask.CopyJobTime("MonthShift");
    }
    return Shift;
}

/*******************************************
***function name     :UpdateJobs
***Designer          :吹谷　優太
***Date              :
***function          :シフト情報をに週別シフトのデータを送る
********************************************/

export function UpdateJobs(shiftdata, ProcessName){
    if (ProcessName == "Shift_UI") {
        update.SendJobName(shiftdata[0]);
        update.SendHourWages(shiftdata[1]);
        update.SendTrasCosts(shiftdata[2]);
        update.SendNightWages(shiftdata[3]);
        update.SendOvertime(shiftdata[4]);
        var NightWages_time = [];
        NightWages_time.push(shiftdata[5]);
        NightWages_time.push(shiftdata[6]);
        update.SendNightWagesRange(NightWages_time);
    } else if (ProcessName == "WeekShift_UI") {
        update.SendJobTime("WeekShift", shiftdata);
    } else if (ProcessName == "MonthShift_UI") {
        update.SendJobTime("MonthShift", shiftdata);
    }
}


//変更不要
