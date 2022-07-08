var xhr = new XMLHttpRequest();

var userinfo  = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
var id = userinfo2[0];
var wday = userinfo2[1];
var period = userinfo2[2];

export function SendClass(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class_name");
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

export function sendNumClasses(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class_num");
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

export function sendUnit(timetabledata){
    var data = [];
    data.push("update");
    data.push("Unit_num");
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

export function sendProfessor(timetabledata){
    var data = [];
    data.push("update");
    data.push("Teacher_name");
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
