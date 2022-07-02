import {CheckUser, RegistUser} from "./MainLogin.js";

export function UserRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    if (id != "" && pass != ""){
        if (id.match(/^[A-Za-z0-9]*$/) && pass.match(/^[A-Za-z0-9]*$/)){
            var result = RegistUser(id, pass);
            if(result=="success"){
                alert("登録成功");
                window.history.back(-1);
            } else if (result == "already"){
                alert("入力されたIDは使用することができません");
            } else {
                alert("登録失敗");
            }    
        } else {
            alert("半角英数字で入力してください");
        }
    } else{
        alert("入力していない項目があります");
    }
}
window.UserRegistration=UserRegistration;
    
export async function AskRegistration(){
    const id = document.getElementById("userID").value;
    const pass = document.getElementById("userPASS").value;
    var result = CheckUser(id, pass);
    console.log(result);
    if(result=="success"){
        window.location.href = './MainDisplay.html?'+id;
    }else{
        console.log(result);
        alert("IDまたはパスワードが違います");
    }
}
window.AskRegistration=AskRegistration;