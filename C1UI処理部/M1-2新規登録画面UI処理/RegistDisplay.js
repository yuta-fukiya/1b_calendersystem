/*******************************************************************
***  File Name    : RegistDisplay.js
***  Version      : V1.2
***  Designer     : 吹谷優太
***  Date         : 2022.7.11
***  Purpose      : 入力ID，パスワードを登録する
*******************************************************************/

import {RegistUser} from "./MainLogin.js";

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
