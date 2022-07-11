var xhr = new XMLHttpRequest();

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];

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
