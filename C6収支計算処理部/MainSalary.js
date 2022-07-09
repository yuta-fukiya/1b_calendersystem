import * as ask from "./AskSalaryData.js";
import * as update from "./UpdateSalaryData.js";
//import * as cal from "./CalculateSalary.js";

export function AskSalary(){ // incomeとexpenseを返す
    var Salary = [];
    Salary.push(ask.Copyincome());
    Salary.push(ask.Copyexpense());

    return Salary;
}
/*
export function SetIncome(Day){
    var income = cal.calculate(Day);
    update.Sendincome(income);
}
*/
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
