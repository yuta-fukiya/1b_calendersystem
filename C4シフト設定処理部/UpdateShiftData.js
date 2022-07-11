/*******************************************************************
***  File Name    : UpdateShiftData.js
***  Version      : V1.5
***  Designer     : 吹谷優太
***  Date         : 2022.7.11
***  Purpose      : シフト情報を管理部に送る
*******************************************************************/

var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");    //URLパラメータを取得する
var userinfo2 = userinfo.split(",");                        //ユーザIDの読み取り

/*****************************************************************
***function name     : SendJobName
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : アルバイト名をスケジュール管理部に送る
 *******************************************************************/

export function SendJobName(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("JobName");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    } 
}        

/*******************************************
***function name     : SendJobTime
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : シフト時間をスケジュール管理部に送る
********************************************/
   
export function SendJobTime(ProcessName, shiftdata){
    var data = [];                //サーバにデータを送るための配列
    var send_shift = shiftdata.replace(/,/g, " ");
    data.push("update");
    data.push(ProcessName);
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(send_shift);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}
/*****************************************************************
***function name     : SendHourWages
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 時給を収支管理部に送る
 *******************************************************************/

export function SendHourWages(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("HourWages");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     : SendTrasCosts
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 交通費を収支管理部に送る
 *******************************************************************/

export function SendTrasCosts(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("TrasCosts");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     : SendNightWages
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 深夜給を収支管理部に送る
 *******************************************************************/

export function SendNightWages(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("NightWages");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        
/*****************************************************************
***function name     : SendNightWagesRange
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 深夜給時間帯を収支管理部に送る
 *******************************************************************/

export function SendNightWagesRange(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("NightWagesRange");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        

/*****************************************************************
***function name     : SendOvertime
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 残業代を収支管理部に送る
 *******************************************************************/

export function SendOvertime(shiftdata){
    var data = [];                //サーバにデータを送るための配列
    data.push("update");
    data.push("OverTime");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(shiftdata);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}        