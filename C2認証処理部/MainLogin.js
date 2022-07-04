var xhr = new XMLHttpRequest();

/*****************************************************************
***function name     :CheckUser
***Designer          :吹谷　優太
***Date              :
***function          :ユーザ情報の参照結果をザーバから受け取る
 *******************************************************************/
export function CheckUser(id, pass){
    var result;                     //参照結果を代入する変数
    var data = [];                  //サーバに送るデータの配列
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

/*****************************************************************
***function name     :RegistUser
***Designer          :吹谷　優太
***Date              :
***function          :新規ユーザ情報をサーバに送信する
 *******************************************************************/
export function RegistUser(id, pass){
    var result;                      //登録結果を代入する変数
    var data = [];                   //サーバに送るデータの配列
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