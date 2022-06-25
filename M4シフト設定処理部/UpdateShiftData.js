/* 
import UpdateShiftInformation from "../M8スケジュール管理部/ShiftManagement.js";    //スケジュール管理部
import Updatesalary from "../M9収支管理部/MainPaymentsManagementJob.js";    //収支管理部

/*****************************************************************
***function name     :SendJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に送る
 *******************************************************************/

export function SendJobName(shiftdata){
    shiftdata=0;
    //UpdateShiftInformation("ユーザID", "JobName", shiftdata);
}        

/*******************************************
***function name     :SendJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に送る
********************************************/
   
export function SendJobTime(ProcessName, shiftdata){
    ProcessName=0;
    shiftdata=0;
    /*  if (ProcessName == "WeekShift"){
        UpdateShiftInformation("ユーザID", "WeekShift", shiftdata);
    }else if (ProcessName == "MonthShift"){
        UpdateShiftInformation("ユーザID", "MonthShift", shiftdata);
    }
    */
}
/*****************************************************************
***function name     :SendHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に送る
 *******************************************************************/

export function SendHourWages(shiftdata){
    shiftdata=0;
    //Updatesalary("ユーザID", "HourWage", shiftdata);
}        

/*****************************************************************
***function name     :SendTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に送る
 *******************************************************************/

export function SendTrasCosts(shiftdata){
    shiftdata=0;
    //Updatesalary("ユーザID", "TrasCosts", shiftdata);
}        

/*****************************************************************
***function name     :SendNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に送る
 *******************************************************************/

export function SendNightWages(shiftdata){
    shiftdata=0;
    //Updatesalary("ユーザID", "NightWages", shiftdata);
}        
/*****************************************************************
***function name     :SendNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に送る
 *******************************************************************/

export function SendNightWagesRange(shiftdata){
    shiftdata=0;
    //Updatesalary("ユーザID", "CopyNightWages", shiftdata);
}        

/*****************************************************************
***function name     :SendOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に送る
 *******************************************************************/

export function SendOvertime(shiftdata){
    shiftdata=0;
    //Updatesalary("ユーザID", "Overtime", shiftdata);
}        

//管理部に応じて変更