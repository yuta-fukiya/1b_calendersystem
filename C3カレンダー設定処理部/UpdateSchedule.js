var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?", "");
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
    xhr.open("POST", "./daySchedule.txt", false);
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

export function SendScheduleTime(ProcessName, scheduledata) {
    var data = [];
    alert(id);
    var send_schedule = scheduledata.replace(/,/g, " ");
    data.push("update");
    data.push(ProcessName);
    data.push(id);
    data.push(send_schedule);
    xhr.open("POST", "./schedule_shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status == 0) {
                return this.responseText;  //success or false       
            }
        }
    }
}
