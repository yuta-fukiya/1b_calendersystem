var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");
/*****************************************************************
***function name     :CopyScheduleName
***Designer          :太田　篤
***Date              :
***function          :予定名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyScheduleName(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("Title");
    data.push(id);
    xhr.open("POST", "./Schedule.txt", false);
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
***function name     :CopyScheduleTime
***Designer          :太田　篤
***Date              :
***function          :スケジュールの時間をスケジュール管理部に問い合わせる
********************************************/

export function CopyScheduleTime(ProcessName){
    var result = "false";
    var send_schedule = "";
    var result_schedule = [];
    var data = [];
    data.push("ask");
    data.push(ProcessName);
    data.push(id);
    data.push(send_schedule);
    xhr.open("POST", "./schedule.txt", false);
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
        result_schedule = result.split(" ");
    }
    return result_schedule;
}
