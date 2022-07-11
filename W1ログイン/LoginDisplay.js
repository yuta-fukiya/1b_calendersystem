import {CheckUser} from "./MainLogin.js";

/*****************************************************************
***function name     :AskResistration
***Designer          :吹谷　優太
***Date              :
***function          :認証処理部から認証結果を受け取る
 *******************************************************************/
export async function AskRegistration(){
    const id = document.getElementById("userID").value;              //入力したID
    const pass = document.getElementById("userPASS").value;          //入力したパスワード
    var result = CheckUser(id, pass);                                //認証結果を代入した変数
    console.log(result);
    if(result=="success"){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        window.location.href = './MainDisplay.html?'+id+","+year+","+month;
    }else{
        console.log(result);
        alert("IDまたはパスワードが違います");
    }
}
window.AskRegistration=AskRegistration;