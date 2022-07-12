/******************************************************
***File Name      :AskTimeTable.js
***Date           :2022.7.12
***Designer       :木野内　健人
***Purpose        :スケジュール管理部から個々の授業情報を取得する
*******************************************************/

var xhr = new XMLHttpRequest();

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];


/******************************************************
***function name  :CopyClass
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部から授業名を取得する
***Return         :授業名
*******************************************************/

export function CopyClass(wday, period){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("Class_name");
    data.push(wday);
    data.push(period);
    data.push("ask");
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if(result == "false"){
        alert("通信に失敗しました");
    }
    else if(result == "none") {
        result = "----";
    }
    return result;
}


/******************************************************
***function name  :CopyClassroom
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部から教室名を取得する
***Return         :教室名
*******************************************************/

export function CopyClassroom(wday, period){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("Class_room");
    data.push(wday);
    data.push(period);
    data.push("ask");
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if(result == "false"){
        alert("通信に失敗しました");
    }
    else if(result == "none") {
        result = "----";
    }
    return result;
}


/******************************************************
***function name  :CopyUnit
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部から単位数を取得する
***Return         :単位数
*******************************************************/

export function CopyUnit(wday, period){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("Unit_num");
    data.push(wday);
    data.push(period);
    data.push("ask");
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    else if(result == "none") {
        result = "--";
    }
    return result;
}


/******************************************************
***function name  :CopyProfessor
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部から教授名を取得する
***Return         :教授名
*******************************************************/

export function CopyProfessor(wday, period){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("Teacher_name");
    data.push(wday);
    data.push(period);
    data.push("ask");
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    else if(result == "none") {
        result = " ";
    }
    return result;
}
