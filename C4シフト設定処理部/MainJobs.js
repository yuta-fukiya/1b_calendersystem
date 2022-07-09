import * as ask from "./AskShiftData.js";      //シフト設定処理部
import * as update from "./UpdateShiftData.js";    //シフト設定処理部

/*****************************************************************
***function name     :AskJobs
***Designer          :吹谷　優太
***Date              :
***function          :シフト情報をデータ管理部に問い合わせる
 *******************************************************************/

export function AskJobs(ProcessName, year, month){
    var Shift = [];                          //ShiftDisplayに返すための配列
    if (ProcessName == "Shift_UI") {
        Shift.push(ask.CopyJobName(year, month));
        Shift.push(ask.CopyHourWages(year, month));
        Shift.push(ask.CopyTrasCosts(year, month));
        Shift.push(ask.CopyNightWages(year, month));
        Shift.push(ask.CopyOvertime(year, month));
        var NightWages_time = ask.CopyNightWagesRange(year, month).split(" ");    //データベースから参照した情報を分割する
        Shift.push(NightWages_time[0]);
        Shift.push(NightWages_time[1]);
    } else if (ProcessName == "WeekShift_UI") {
        Shift = ask.CopyJobTime("WeekShift", year, month);
    } else if (ProcessName == "MonthShift_UI") {
        Shift = ask.CopyJobTime("MonthShift", year, month);
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
        var NightWages_time = "";            //深夜給になる時間帯に関する情報を一つにまとめる
        NightWages_time = shiftdata[5] + " " + shiftdata[6];
        update.SendNightWagesRange(NightWages_time);
    } else if (ProcessName == "WeekShift_UI") {
        update.SendJobTime("WeekShift", shiftdata);
    } else if (ProcessName == "MonthShift_UI") {
        update.SendJobTime("MonthShift", shiftdata);
    }
}

