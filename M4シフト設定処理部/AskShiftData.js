/* 
import ReturnShiftInformation from "../M8スケジュール管理部/ShiftManagement.js";    //スケジュール管理部
import Asksalary from "../M9収支管理部/MainPaymentsManagementJob.js";       //収支管理部

/*****************************************************************
***function name     :CopyJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyJobName(){
    return "焼肉屋さん";//ReturnShiftInformation("ユーザID", "JobName");
}        

/*******************************************
***function name     :CopyJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に問い合わせる
********************************************/

export function CopyJobTime(ProcessName){
    var sample = [];
    for (var i = 0; i < 14; i++){
        sample.push("12:12");
    }
    if (ProcessName == "WeekShift"){
        return sample;//ReturnShiftInformation("ユーザID", "WeekShift");
    }else if (ProcessName == "MonthShift"){
       // return ReturnShiftInformation("ユーザID", "MonthShift");
    }
}

/*****************************************************************
***function name     :CopyHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyHourWages(){
    return 1111;//Asksalary("ユーザID", "HourWage");
}        

/*****************************************************************
***function name     :CopyTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に問い合わせる
 *******************************************************************/

export function CopyTrasCosts(){
    return 2222;//Asksalary("ユーザID", "TrasCosts");
}        

/*****************************************************************
***function name     :CopyNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWages(){
    return 3333;//Asksalary("ユーザID", "NightWages");
}        
/*****************************************************************
***function name     :CopyNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWagesRange(){
    var sample = [];
    sample.push("11:11");
    sample.push("22:22");
    return sample;//Asksalary("ユーザID", "CopyNightWages");
}        

/*****************************************************************
***function name     :CopyOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に問い合わせる
 *******************************************************************/

export function CopyOvertime(){
    return 4444;//Asksalary("ユーザID", "Overtime");
}        

//管理部に応じて変更