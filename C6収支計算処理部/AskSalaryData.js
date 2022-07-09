var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");

export function Copyincome(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("income");
    data.push(id);
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

export function Copyexpense(){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("expense");
    data.push(id);
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
