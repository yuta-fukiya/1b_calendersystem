var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");

export function SendClass(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class");
    data.push(id);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}

export function sendNumClasses(timetabledata){
    var data = [];
    var send_timetable = timetabledata.replace(/,/g, " ");
    data.push("update");
    data.push("NumClasses");
    data.push(id);
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
    data.push("Unit");
    data.push(id);
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
    data.push("Professor");
    data.push(id);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}
