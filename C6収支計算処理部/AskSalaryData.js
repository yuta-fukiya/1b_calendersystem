var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");

export function Copyincome(year, month){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("income");
    data.push(userinfo2[0]);
    data.push(year);
    data.push(month);
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

export function Copyexpense(year, month){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("expense");
    data.push(userinfo2[0]);
    data.push(year);
    data.push(month);
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
