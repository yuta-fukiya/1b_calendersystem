var xhr = new XMLHttpRequest();
export function UserRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    if (id != "" || pass != ""){
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
                if(result=="success"){
                    alert("登録成功");
                } else if (result == "already"){
                    alert ("入力されたIDは使用することができません");
                } else {
                    alert("登録失敗");
                }
            }
        }
    }
    xhr.send(data);
    } else {
        alert("入力していない項目があります");
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
    xhr.open("POST", "./login.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                result = this.responseText;
                console.log(result);
                if(result=="success"){
                    alert("ログイン成功");
                    window.location.href = './MainDisplay.html';
                }else{
                    alert("ログイン失敗");
                }
                        
            }
        }
    }
}
window.AskRegistration=AskRegistration;
