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
***function name     :SendTitle
***Designer          :太田　篤
***Date              :
***function          :予定名をスケジュール管理部に送る
 *******************************************************************/

export function SendTitle(scheduledata) {
    var data = [];
    data.push("update");
    data.push("title");
    data.push(id);
    data.push(arrayData);
    data.push(scheduledata);
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }

}

/*******************************************
***function name     :SendS_Time
***Designer          :太田　篤
***Date              :
***function          :予定開始時間をスケジュール管理部に送る
********************************************/

export function SendS_Time(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("S_time");
    data.push(id);
    data.push(arrayData);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}

/*****************************************************************
***function name     :SendE_time
***Designer          :太田　篤
***Date              :
***function          :予定終了時間をスケジュール管理部に問い合わせる
 *******************************************************************/

export function SendE_Time(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("E_time");
    data.push(id);
    data.push(arrayData);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}

/*****************************************************************
***function name     :SendMemo
***Designer          :太田　篤
***Date              :
***function          :予定のメモをスケジュール管理部に問い合わせる
 *******************************************************************/

export function SendMemo(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("Memo");
    data.push(id);
    data.push(arrayData);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;  //success or false
    }
}