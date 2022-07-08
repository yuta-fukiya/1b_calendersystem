var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");

export function SendClass(timetabledata){
    var data = [];
    data.push("update");
    data.push("Class_name");
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
    data.push("update");
    data.push("Class_num");
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
    data.push("Unit_num");
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
    data.push("Teacher_name");
    data.push(id);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}

export function sendwday(timetabledata){
    var data = [];
    data.push("update");
    data.push("wday");
    data.push(id);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}

export function sendperiod(timetabledata){
    var data = [];
    data.push("update");
    data.push("period");
    data.push(id);
    data.push(timetabledata);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}
