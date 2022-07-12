/*******************************************************************
***  File Name    : MainSalary.js
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 収支計算処理部の情報をまとめて返す
*******************************************************************/

import * as ask from "./AskSalaryData.js"; // 収支計算処理部
import * as update from "./UpdateSalaryData.js"; // 収支計算処理部
import * as cal from "./CalculateSalary.js"; // 収支計算処理部

/*****************************************************************
***function name     : AskSalary
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収支情報を収支管理部に問い合わせる
***Return            : 収支情報
 *******************************************************************/

export function AskSalary(year, month){
    var Salary = [];
    Salary.push(ask.Copyincome(year, month));
    Salary.push(ask.Copyexpense(year, month));

    return Salary;
}

/*************************************************************
***function name     : SetIncome
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収入を計算して、収支管理部で更新する
**************************************************************/

export function SetIncome(year, month, day){
    var income = cal.calculate(year, month, day);
    update.Sendincome(income);
}

/*************************************************************
***function name     : UpdateSalary
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収支情報を収支管理部で更新する
**************************************************************/

export function UpdateSalary(salary, ProcessName){
    if (ProcessName == "income") {
        update.Sendincome(salary);
    } else if (ProcessName == "expense") {
        update.Sendexpense(salary);
    } else if (ProcessName == "All") {
        update.Sendincome(salary[0]);
        update.Sendexpense(salary[1]);
    }
}
