/*******************************************************************
***  File Name    : AskSalaryData.js
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 収支情報を収支管理部に問い合わせる
*******************************************************************/

var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");

/*****************************************************************
***function name     : Copyincome
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収入を収支管理部に問い合わせる
***Return            : 問い合わせ結果
 *******************************************************************/

export function Copyincome(year, month){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("income");
    data.push(userinfo2[0]);    // ユーザID
    data.push(year);
    data.push(month);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        

/*****************************************************************
***function name     : Copyexpense
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 支出を収支管理部に問い合わせる
***Return            : 問い合わせ結果
 *******************************************************************/

export function Copyexpense(year, month){
    var result = "false";
    var data = [];
    data.push("ask");
    data.push("expense");
    data.push(userinfo2[0]);    // ユーザID
    data.push(year);
    data.push(month);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if (xhr.readyState == 4 && xhr.status == 200){
        result = xhr.responseText;
    }
    if (result == "false"){
        alert("通信に失敗しました");
    }
    return result;
}        
