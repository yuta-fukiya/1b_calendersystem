var xhr = new XMLHttpRequest();
export function UserRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    if (id != "" && pass != ""){
        if (id.match(/^[A-Za-z0-9]*$/) && pass.match(/^[A-Za-z0-9]*$/)){
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
                            window.history.back(-1);
                        } else if (result == "already"){
                            alert ("入力されたIDは使用することができません");
                        } else {
                            alert("登録失敗");
                        }
                    }
                }
            }
        } else {
            alert("半角英数字で入力してください");
        }
        xhr.send(data);
    } else{
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
                    window.location.href = './MainDisplay.html';
                }else{
                    alert("IDまたはパスワードが違います");
                }
                        
            }
        }
    }
}
window.AskRegistration=AskRegistration;
