var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");  

export function Sendincome(salary){
    var data = [];
    data.push("update");
    data.push("income");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(salary);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}        

export function Sendexpense(salary){
    var data = [];
    data.push("update");
    data.push("expense");
    data.push(userinfo2[0]);
    data.push(userinfo2[1]);
    data.push(userinfo2[2]);
    data.push(salary);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}        
