import * as ask from "./AskSalaryData.js";
import * as update from "./UpdateSalaryData.js";
import * as cal from "./CalculateSalary.js";

export function AskSalary(year, month){ // incomeとexpenseを返す
    var Salary = [];
    Salary.push(ask.Copyincome(year, month));
    Salary.push(ask.Copyexpense(year, month));

    return Salary;
}

export function SetIncome(year, month, day){
    var income = cal.calculate(year, month, day);
    update.Sendincome(income);
}

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
