var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");
/*****************************************************************
***function name     :CopyJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyJobName(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("Jobname");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./schedule_shift.txt", false);
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
***function name     :CopyJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に問い合わせる
********************************************/

export function CopyJobTime(ProcessName){
    var result = "false";         //参照結果を返す変数
    var result_shift = [];        //サーバから受け取ったデータをreturnするために変換したものを代入する変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push(ProcessName);
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./schedule_shift.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
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
    return result_shift;
}

/*****************************************************************
***function name     :CopyHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyHourWages(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("HourWages");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に問い合わせる
 *******************************************************************/

export function CopyTrasCosts(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("TrasCosts");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWages(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("NightWages");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        
/*****************************************************************
***function name     :CopyNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWagesRange(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("NightWagesRange");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     :CopyOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に問い合わせる
 *******************************************************************/

export function CopyOvertime(){
    var result = "false";         //参照結果を返す変数
    var data = [];                //サーバにデータを送るための配列
    data.push("ask");
    data.push("Overtime");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        
