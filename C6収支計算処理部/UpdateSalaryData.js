/*******************************************************************
***  File Name    : UpdateSalaryData.js
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 収支情報を収支管理部に送る
*******************************************************************/

var xhr = new XMLHttpRequest();
const userinfo = window.location.search.replace("?","");
var userinfo2 = userinfo.split(",");  

/*****************************************************************
***function name     : Sendincome
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収入を収支管理部に送る
 *******************************************************************/

export function Sendincome(salary){
    var data = [];
    data.push("update");
    data.push("income");
    data.push(userinfo2[0]);    // id
    data.push(userinfo2[1]);    // year
    data.push(userinfo2[2]);    // month
    data.push(salary);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}        

/*****************************************************************
***function name     : Sendexpense
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 支出を収支管理部に送る
 *******************************************************************/

export function Sendexpense(salary){
    var data = [];
    data.push("update");
    data.push("expense");
    data.push(userinfo2[0]);    // id
    data.push(userinfo2[1]);    // year
    data.push(userinfo2[2]);    // month
    data.push(salary);
    xhr.open("POST", "./salary.txt", false);
    xhr.send(data);
    if(xhr.readyState == 4 && xhr.status == 200){
        return xhr.responseText;
    }
}        
