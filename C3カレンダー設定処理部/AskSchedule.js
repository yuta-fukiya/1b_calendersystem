var xhr = new XMLHttpRequest();
const url = new URL(window.location.href);
const userinfo = window.location.search.replace("?", "");
var userinfo2 = userinfo.split(","); 
const id = userinfo2[0];
/*****************************************************************
***function name     :CopyDayScheduleName
***Designer          :太田　篤
***Date              :
***function          :予定名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyTitle(year, month, day){
    const arrayData = year + "/" + month + "/" + day;
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

/*****************************************************************
***function name     :CopyS_time
***Designer          :太田　篤
***Date              :
***function          :予定開始時間をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyS_time(year, month, day) {
    const arrayData = year + "/" + month + "/" + day;
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


/*****************************************************************
***function name     :CopyE_time
***Designer          :太田　篤
***Date              :
***function          :予定終了をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyE_time(year, month, day) {
    const arrayData = year + "/" + month + "/" + day;
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


/*****************************************************************
***function name     :CopyMemo
***Designer          :太田　篤
***Date              :
***function          :予定のメモをスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyMemo(year, month, day) {
    const arrayData = year + "/" + month + "/" + day;
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