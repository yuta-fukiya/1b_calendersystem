var xhr = new XMLHttpRequest();

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];

export function CopyClass(){
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
    return result;
}


export function CopyNumClasses(){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("Class_num");
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
    return result;
}

export function CopyUnit(){
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
    return result;
}

export function CopyProfessor(){
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
    return result;
}

export function Copywday(){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("wday");
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
    return result;
}

export function Copyperiod(){
    var result = "false";
    var data = [];
    data.push(id);
    data.push("period");
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
    return result;
}
