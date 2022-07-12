/******************************************************
***File Name      :AskTimeTable.js
***Date           :2022.7.12
***Designer       :木野内　健人
***Purpose        :スケジュール管理部へ個々の授業情報を送信する
*******************************************************/

var xhr = new XMLHttpRequest();

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];


/******************************************************
***function name  :SendClass
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部へ授業名を送信する
*******************************************************/

export function SendClass(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class_name");
    // 主キー格納
    data.push(id);
    data.push(wday);
    data.push(period);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}


/******************************************************
***function name  :sendClassroom
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部へ教室名を送信する
*******************************************************/

export function sendClassroom(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class_room");
    // 主キー格納
    data.push(id);
    data.push(wday);
    data.push(period);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}


/******************************************************
***function name  :sendUnit
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部へ単位数を送信する
*******************************************************/

export function sendUnit(timetabledata){
    var data = [];
    data.push("update");
    data.push("Unit_num");
    // 主キー格納
    data.push(id);
    data.push(wday);
    data.push(period);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}


/******************************************************
***function name  :sendProfessor
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部へ教授名を送信する
*******************************************************/

export function sendProfessor(timetabledata){
    var data = [];
    data.push("update");
    data.push("Teacher_name");
    // 主キー格納
    data.push(id);
    data.push(wday);
    data.push(period);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}
