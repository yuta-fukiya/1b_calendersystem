import {CheckUser, RegistUser} from "./MainLogin.js";

/*****************************************************************
***function name     :UserResistration
***Designer          :吹谷　優太
***Date              :
***function          :新規ユーザ情報を認証処理部にに送信する
 *******************************************************************/
export function UserRegistration(){
    const id = document.getElementById("userID").value;               //入力したID
    const pass = document.getElementById("userPASS").value;           //入力したパスワード
    if (id != "" && pass != ""){                                          //未入力判定
        if (id.match(/^[A-Za-z0-9]*$/) && pass.match(/^[A-Za-z0-9]*$/)){  //半角英数字判定
            var result = RegistUser(id, pass);                        //登録結果を代入した変数
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