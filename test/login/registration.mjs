var xhr = new XMLHttpRequest();
export function UserRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    var result;
    var data = [];
    data.push("UserRegistration");
    data.push(id);
    data.push(pass);
    xhr.open("POST", "/login.txt", true);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                result = this.responseText;
            }
        }
    }
    xhr.send(data);
    if(result=="success"){
        alert("登録成功");
    }else{
        alert("登録失敗");
    }
}
window.UserRegistration=UserRegistration;
    
    
export function AskRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    var result;
    var data = [];
    data.push("AskRegistration");
    data.push(id);
    data.push(pass);
    xhr.open("POST", "/login.txt", true);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                result = this.responseText;
            }
        }
    }
    xhr.send(data);
    if(result=="success"){
        alert("ログイン成功");
    }else{
        alert("ログイン失敗");
    }
}
window.AskRegistration=AskRegistration;
