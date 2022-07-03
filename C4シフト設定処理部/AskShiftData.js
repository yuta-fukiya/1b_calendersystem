var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");
/*****************************************************************
***function name     :CopyJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyJobName(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("Jobname");
    data.push(id);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    } else if (result == "none"){
        result = "32文字以内で入力してください";
    }       
    return result;
}

/*******************************************
***function name     :CopyJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に問い合わせる
********************************************/

export function CopyJobTime(ProcessName){
    var result = "false";
    var send_shift = "";
    var result_shift = [];
    var data = [];
    data.push("ask");
    data.push(ProcessName);
    data.push(id);
    data.push(send_shift);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    } else if (result == "none" && ProcessName == "WeekShift"){
        for (var i = 0; i < 14; i++){
            result_shift.push("00:00");
        }
    } else if (result === "none" && ProcessName == "MonthShift"){
    
    } else {
        result_shift = result.split(" ");
    }
    return result_shift;
}

/*****************************************************************
***function name     :CopyHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyHourWages(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("HourWages");
    data.push(id);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に問い合わせる
 *******************************************************************/

export function CopyTrasCosts(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("TrasCosts");
    data.push(id);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWages(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("NightWages");
    data.push(id);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        
/*****************************************************************
***function name     :CopyNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWagesRange(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("NightWagesRange");
    data.push(id);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に問い合わせる
 *******************************************************************/

export function CopyOvertime(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("Overtime");
    data.push(id);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        
