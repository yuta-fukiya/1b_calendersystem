var xhr = new XMLHttpRequest();
const url = new URL(window.location.href);

// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

// consoleに受け取ったパラメータを出力
console.log(params);

// パラメータから「username」を取得
const id = params.get("id");
/*****************************************************************
***function name     :SendTitle
***Designer          :太田　篤
***Date              :
***function          :予定名をスケジュール管理部に送る
 *******************************************************************/

export function SendTitle(scheduledata) {
    var result;
    alert(id);
    var data = [];
    data.push("update");
    data.push("title");
    data.push(id);
    data.push(scheduledata);
    alert(scheduledata)
    xhr.open("POST", "./DaySchedule.txt", false);
    xhr.send(data);

    if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status == 0) {
            result = xhr.responseText;  //success or false
            return result;
        }
    }

}

/*******************************************
***function name     :SendJobTime
***Designer          :太田　篤
***Date              :
***function          :予定時間をスケジュール管理部に送る
********************************************/

export function SendS_Time(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("S_time");
    data.push(id);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status == 0) {
                return this.responseText;  //success or false       
            }
        }
    }
}

export function SendE_Time(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("E_time");
    data.push(id);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status == 0) {
                return this.responseText;  //success or false       
            }
        }
    }
}

export function SendMemo(scheduledata) {
    var data = [];
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push("Memo");
    data.push(id);
    data.push(send_schedule);
    xhr.open("POST", "./DaySchedule.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status == 0) {
                return this.responseText;  //success or false       
            }
        }
    }
}
