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


export function CopyNumClasses(ProcessName){
    var result = "false";
    var send_timetable = "";
    var result_timetable = [];
    var data = [];
    data.push("ask");
    data.push(ProcessName);
    data.push(id);
    data.push(send_timetable);
    xhr.open("POST", "./schedule_timetable.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
        console.log(result);
    }
    if (result == "false"){
        alert("通信に失敗しました");
    } else if (result == "none" && ProcessName == "WeekShift"){
        for (var i = 0; i < 14; i++){
            result_shift.push("00:00");
        }
    } else if (result === "none" && ProcessName == "MonthShift"){
    
    } else {
        result_shift = result.split(" ");
    }
    return result;
}

