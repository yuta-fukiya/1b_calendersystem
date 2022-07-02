var xhr = new XMLHttpRequest();

export function CheckUser(id, pass){
    var result;
    var data = [];
    data.push("AskRegistration");
    data.push(id);
    data.push(pass);
    xhr.open("POST", "./login.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
            result = xhr.responseText;                 
        }
    return result;
}

export function RegistUser(id, pass){
    var result;
    var data = [];
    data.push("UserRegistration");
    data.push(id);
    data.push(pass);
    xhr.open("POST", "/login.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
            result = xhr.responseText;
    }
    return result;
}