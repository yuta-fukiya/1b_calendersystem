var xhr = new XMLHttpRequest();
const url = new URL(window.location.href);

// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

// consoleに受け取ったパラメータを出力
console.log(params);

// パラメータから「username」を取得
const id = params.get("id");
const Year = params.get("year");
const Month = params.get("month");
const Day = params.get("day");

const arrayData = Year + "/" + Month + "/" + Day;
/*****************************************************************
***function name     :CopyDayScheduleName
***Designer          :太田　篤
***Date              :
***function          :予定名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyTitle(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("title");
    data.push(id);
    data.push(arrayData);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    } else if (result == "none"){
        result = "予定なし";
    }       
    return result;
}

export function CopyS_time() {
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("S_time");
    data.push(id);
    data.push(arrayData);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.responseText;
    }
    if (result == "false") {
        alert("通信に失敗しました");
    } else if (result == "none") {
        result = "　";
    }
    return result;
}

export function CopyE_time() {
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("E_time");
    data.push(id);
    data.push(arrayData);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.responseText;
    }
    if (result == "false") {
        alert("通信に失敗しました");
    } else if (result == "none") {
        result = "　";
    }
    return result;
}

export function CopyMemo() {
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("Memo");
    data.push(id);
    data.push(arrayData);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.responseText;
    }
    if (result == "false") {
        alert("通信に失敗しました");
    } else if (result == "none") {
        result = "　";
    }
    return result;
}

/*******************************************
***function name     :CopyDayScheduleTime
***Designer          :太田　篤
***Date              :
***function          :スケジュールの時間をスケジュール管理部に問い合わせる
********************************************/

/*export function CopyDayScheduleTime(ProcessName){
    var result = "false";
    var send_DaySchedule = "";
    var result_DaySchedule = [];
    var data = [];
    data.push("ask");
    data.push(ProcessName);
    data.push(id);
    data.push(send_DaySchedule);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
        console.log(result);
    }
    if (result == "false"){
        alert("通信に失敗しました");
    } else if (result == "none" && ProcessName == "s_time"){
        
    } else if (result === "none" && ProcessName == "e_time"){
    
    } else if (result == "none" && ProcessName == "memo") {

    } else if (result == "none" && ProcessName == "date") {

    } 
     else {
        result_DaySchedule = result.split(" ");
    }
    return result_DaySchedule;
}
*/