var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");

export function CopyClass(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("Class");
    data.push(id);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if(result == "false"){
        alert("通信に失敗しました");
    } else if(result == "none") {
        result = "32文字以内で入力して下さい";
    }
    return result;
}


export function CopyNumClasses(){
    var result = "false";
    var result_timetable = [];
    var data = [];
    data.push("ask");
    data.push("NumClasses");
    data.push(id);
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
    var result_timetable = [];
    var data = [];
    data.push("ask");
    data.push("Unit");
    data.push(id);
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
    var result_timetable = [];
    var data = [];
    data.push("ask");
    data.push("Professor");
    data.push(id);
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
