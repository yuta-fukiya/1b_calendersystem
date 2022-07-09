var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");

export function Sendincome(salary){
    var data = [];
    data.push("update");
    data.push("income");
    data.push(id);
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
    data.push(id);
    data.push(salary);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}        
