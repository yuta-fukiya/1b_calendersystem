var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");
/*****************************************************************
***function name     :SendJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に送る
 *******************************************************************/

export function SendJobName(shiftdata){
    var data = [];
    data.push("update");
    data.push("JobName");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*******************************************
***function name     :SendJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に送る
********************************************/
   
export function SendJobTime(ProcessName, shiftdata){
    var data = [];
    var send_shift = shiftdata.replace(/,/g, " ");
    data.push("update");
    data.push(ProcessName);
    data.push(id);
    data.push(send_shift);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}
/*****************************************************************
***function name     :SendHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に送る
 *******************************************************************/

export function SendHourWages(shiftdata){
    var data = [];
    data.push("update");
    data.push("HourWages");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     :SendTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に送る
 *******************************************************************/

export function SendTrasCosts(shiftdata){
    var data = [];
    data.push("update");
    data.push("TrasCosts");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     :SendNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に送る
 *******************************************************************/

export function SendNightWages(shiftdata){
    var data = [];
    data.push("update");
    data.push("NightWages");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        
/*****************************************************************
***function name     :SendNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に送る
 *******************************************************************/

export function SendNightWagesRange(shiftdata){
    var data = [];
    data.push("update");
    data.push("NightWagesRange");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     :SendOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に送る
 *******************************************************************/

export function SendOvertime(shiftdata){
    var data = [];
    data.push("update");
    data.push("OverTime");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        