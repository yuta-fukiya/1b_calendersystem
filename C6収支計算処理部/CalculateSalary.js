/*******************************************************************
***  File Name    : CalculationSalary.js
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 収入を計算して結果を返す
*******************************************************************/

import {AskJobs} from "/MainJobs.js";

/*****************************************************************
***function name     : calculate
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 収入を週別シフト時間と月別シフト時間から計算してまとめて返す
***Return            : 収入
 *******************************************************************/

export function calculate(year, month, day) {
    var income = 0.0;   // 収入の合計を返す変数
    var Week = AskJobs("WeekShift_UI", year, month);
    var Month = AskJobs("MonthShift_UI", year, month);

    if (Week != null) {
        income += calWeek(year, month, day);
    }
    if (Month != null) {
        income += calMonth(year, month, day);
    }

    return income;
}

/*****************************************************************
***function name     : calWeek
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 週別シフトから収入を計算する
***Return            : 収入
 *******************************************************************/

function calWeek(year, month, day) {
    var income = 0.0;
    var delta = [2];
    var start = [2];
    var end = [2];

    var Shift = AskJobs("Shift_UI", year, month);
    var Week = AskJobs("WeekShift_UI", year, month);
    var Month = AskJobs("MonthShift_UI", year, month);

    var Night_w = [14];
    var temp = [14];
    var check = [31];

    var startDayOfWeek = new Date(year, month - 1, 1).getDay();

    var HourWages = parseInt(Shift[1]);
    var TrasCosts = parseInt(Shift[2]);
    var NightWages = Shift[3];
    var Overtime = Shift[4];
    var Night_s = Shift[5].split(":");
    var Night_f = Shift[6].split(":");
    for (let i=0; i<day; i++) {     // 月別シフト時間と週別シフト時間の重複チェック
        start = Month[i*2].split(":");
        end = Month[i*2+1].split(":");
        if (parseInt(start[0]) == parseInt(end[0]) && parseInt(start[1]) == parseInt(end[1])) {
            check[i] = 1;
        } else {
            check[i] = 0;
        }
    }

    for (let i=0; i<14; i=i+2) {    // 開始時刻 > 終了時刻の場合、終了時刻を24時間遅らせる
        start = Week[i].split(":");
        end = Week[i+1].split(":");
        if (parseInt(start[0]) > parseInt(end[0])) {
            Week[i+1] = parseInt(end[0]) + 24 + ":" + end[1];
        } 
    }

    if (parseInt(Night_s[0]) > parseInt(Night_f[0])) {
        Night_f[0] = parseInt(Night_f[0]) + 24 + "";
    }

    for (let i=0; i<14; i=i+2) {
        start = Week[i].split(":");
        end = Week[i+1].split(":");
        if (parseInt(start[0]) >= 0 && 5>= parseInt(start[0])) {
            Week[i] = parseInt(start[0]) + 24 + ":" + start[1];
            Week[i+1] = parseInt(end[0]) + 24 + ":" + end[1];
        } 
    }
    
    for (let i=0; i<14; i=i+2) {    // 通常の時間と深夜の時間を区別して配列に保管する
        start = Week[i].split(":");
        end = Week[i+1].split(":");

        if (parseInt(start[0])>parseInt(Night_f[0]) || (parseInt(start[0]) == parseInt(Night_f[0]) && parseInt(start[1])>parseInt(Night_f[1]))) {
            Night_w[i] = Night_w[i+1] = temp[i] = temp[i+1] = "00:00";
        } else if (parseInt(end[0])<parseInt(Night_s[0]) || (parseInt(end[0])==parseInt(Night_s[0]) && parseInt(end[1])<parseInt(Night_s[1]))) {
            Night_w[i] = Night_w[i+1] = temp[i] = temp[i+1] = "00:00";
        } else if (parseInt(start[0])>parseInt(Night_s[0]) || (parseInt(start[0]) == parseInt(Night_s[0]) && parseInt(start[1])>parseInt(Night_s[1]))) {
            Night_w[i] = Week[i];
            temp[i] = temp[i+1] = "00:00";
            if (parseInt(end[0])<parseInt(Night_f[0]) || (parseInt(end[0])==parseInt(Night_f[0]) && parseInt(end[1])<parseInt(Night_f[1]))) {
                Night_w[i+1] = Week[i+1];
                Week[i] = Week[i+1] = "00:00";
            } else {
                Night_w[i+1] = Night_f[0] + ":" + Night_f[1];
                Week[i] = Night_s[0] + ":" + Night_s[1];
            }
        } else {
            Night_w[i] = Night_s[0] + ":" + Night_s[1];
            if (parseInt(end[0])<parseInt(Night_f[0]) || (parseInt(end[0])==parseInt(Night_f[0]) && parseInt(end[1])<parseInt(Night_f[1]))) {
                Night_w[i+1] = Week[i+1];
                Week[i+1] = Night_s[0] + ":" + Night_s[1];
                temp[i] = temp[i+1] = "00:00";
            } else {
                Night_w[i+1] = Night_f[0] + ":" + Night_f[1];
                temp[i] = Night_f[0] + ":" + Night_f[1];
                temp[i+1] = Week[i+1] 
                Week[i+1] = Night_s[0] + ":" + Night_s[1];
            }
        }
    }
    
    for (let i=startDayOfWeek*2; i<(day+startDayOfWeek)*2; i=i+2) { // 収入の計算を行う
        if (check[i/2-startDayOfWeek] == 1) {
            start = Week[i%14].split(":");
            end = Week[(i+1)%14].split(":");
            var temp2 = income;
            var temp3 = 0.0;
            var temp4 = 0.0;
            for (let j=0; j<2; ++j) {
                delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
            }
            temp3 = temp4;
            temp4 += delta[0]+delta[1]/60;
            if (temp3>8.0) {
                income += (temp4-temp3)*Overtime;
            } else if (temp4>8.0) {
                income += (8-temp3)*HourWages;
                income += (temp4-8)*Overtime;
            } else {
                income += (temp4-temp3)*HourWages;
            }

            start = Night_w[i%14].split(":");
            end = Night_w[(i+1)%14].split(":");
            for (let j=0; j<2; ++j) {
                delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
            }
            temp3 = temp4;
            temp4 += delta[0]+delta[1]/60;
            if (temp3>8.0) {
                income += (temp4-temp3)*HourWages*1.5;
            } else if (temp4>8.0) {
                income += (8-temp3)*NightWages;
                income += (temp4-8)*HourWages*1.5;
            } else {
                income += (temp4-temp3)*NightWages;
            }
            
            start = temp[i%14].split(":");
            end = temp[(i+1)%14].split(":");
            for (let j=0; j<2; ++j) {
                delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
            }
            temp3 = temp4;
            temp4 += delta[0]+delta[1]/60;
            if (temp3>8.0) {
                income += (temp4-temp3)*Overtime;
            } else if (temp4>8.0) {
                income += (8-temp3)*HourWages;
                income += (temp4-8)*Overtime;
            } else {
                income += (temp4-temp3)*HourWages;
            }

            if (temp2 != income) {
                income += TrasCosts;
            }
        }
    }
    return income;
}

/*****************************************************************
***function name     : calMonth
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 月別シフトから収入を計算する
***Return            : 収入
 *******************************************************************/

function calMonth(year, month, day) {
    var income = 0.0;
    var delta = [2];
    var start = [2];
    var end = [2];

    var Shift = AskJobs("Shift_UI", year, month);
    var Month = AskJobs("MonthShift_UI", year, month);
    
    var Night_w = [31];
    var temp = [31];

    var HourWages = parseInt(Shift[1]);
    var TrasCosts = parseInt(Shift[2]);
    var NightWages = Shift[3];
    var Overtime = Shift[4];
    var Night_s = Shift[5].split(":");
    var Night_f = Shift[6].split(":");
    
    if (parseInt(Night_s[0]) > parseInt(Night_f[0])) {    // 開始時刻 > 終了時刻の場合、終了時刻を24時間遅らせる
        Night_f[0] = parseInt(Night_f[0]) + 24 + "";
    }

    for (let i=0; i<day*2; i=i+2) {
        start = Month[i].split(":");
        end = Month[i+1].split(":");
        if (parseInt(start[0]) > parseInt(end[0])) {
            Month[i+1] = parseInt(end[0]) + 24 + ":" + end[1];
        } 
    }

    for (let i=0; i<day*2; i=i+2) {
        start = Month[i].split(":");
        end = Month[i+1].split(":");
        if (parseInt(start[0]) >= 0 && 5>= parseInt(start[0])) {
            Month[i] = parseInt(start[0]) + 24 + ":" + start[1];
            Month[i+1] = parseInt(end[0]) + 24 + ":" + end[1];
        } 
    }
    
    for (let i=0; i<day*2; i=i+2) {    // 通常の時間と深夜の時間を区別して配列に保管する
        start = Month[i].split(":");
        end = Month[i+1].split(":");

        if (parseInt(start[0])>parseInt(Night_f[0]) || (parseInt(start[0]) == parseInt(Night_f[0]) && parseInt(start[1])>parseInt(Night_f[1]))) {
            Night_w[i] = Night_w[i+1] = temp[i] = temp[i+1] = "00:00";
        } else if (parseInt(end[0])<parseInt(Night_s[0]) || (parseInt(end[0])==parseInt(Night_s[0]) && parseInt(end[1])<parseInt(Night_s[1]))) {
            Night_w[i] = Night_w[i+1] = temp[i] = temp[i+1] = "00:00";
        } else if (parseInt(start[0])>parseInt(Night_s[0]) || (parseInt(start[0]) == parseInt(Night_s[0]) && parseInt(start[1])>parseInt(Night_s[1]))) {
            Night_w[i] = Month[i];
            temp[i] = temp[i+1] = "00:00";
            if (parseInt(end[0])<parseInt(Night_f[0]) || (parseInt(end[0])==parseInt(Night_f[0]) && parseInt(end[1])<parseInt(Night_f[1]))) {
                Night_w[i+1] = Month[i+1];
                Month[i] = Month[i+1] = "00:00";
            } else {
                Night_w[i+1] = Night_f[0] + ":" + Night_f[1];
                Month[i] = Night_s[0] + ":" + Night_s[1];
            }
        } else {
            Night_w[i] = Night_s[0] + ":" + Night_s[1];
            if (parseInt(end[0])<parseInt(Night_f[0]) || (parseInt(end[0])==parseInt(Night_f[0]) && parseInt(end[1])<parseInt(Night_f[1]))) {
                Night_w[i+1] = Month[i+1];
                Month[i+1] = Night_s[0] + ":" + Night_s[1];
                temp[i] = temp[i+1] = "00:00";
            } else {
                Night_w[i+1] = Night_f[0] + ":" + Night_f[1];
                temp[i] = Night_f[0] + ":" + Night_f[1];
                temp[i+1] = Month[i+1] 
                Month[i+1] = Night_s[0] + ":" + Night_s[1];
            }
        }
    }
    
    for (let i=0; i<day*2; i=i+2) { // 収入の計算を行う
        start = Month[i].split(":");
        end = Month[i+1].split(":");
        var temp2 = income;
        var temp3 = 0.0;
        var temp4 = 0.0;
        for (let j=0; j<2; ++j) {
            delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
        }
        temp3 = temp4;
        temp4 += delta[0]+delta[1]/60;
        if (temp3>8.0) {
            income += (temp4-temp3)*Overtime;
        } else if (temp4>8.0) {
            income += (8-temp3)*HourWages;
            income += (temp4-8)*Overtime;
        } else {
            income += (temp4-temp3)*HourWages;
        }

        start = Night_w[i].split(":");
        end = Night_w[i+1].split(":");
        for (let j=0; j<2; ++j) {
            delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
        }
        temp3 = temp4;
        temp4 += delta[0]+delta[1]/60;
        if (temp3>8.0) {
            income += (temp4-temp3)*HourWages*1.5;
        } else if (temp4>8.0) {
            income += (8-temp3)*NightWages;
            income += (temp4-8)*HourWages*1.5;
        } else {
            income += (temp4-temp3)*NightWages;
        }
        
        start = temp[i].split(":");
        end = temp[i+1].split(":");
        for (let j=0; j<2; ++j) {
            delta[j] = parseInt(end[j], 10)  - parseInt(start[j], 10);
        }
        temp3 = temp4;
        temp4 += delta[0]+delta[1]/60;
        if (temp3>8.0) {
            income += (temp4-temp3)*Overtime;
        } else if (temp4>8.0) {
            income += (8-temp3)*HourWages;
            income += (temp4-8)*Overtime;
        } else {
            income += (temp4-temp3)*HourWages;
        }

        if (temp2 != income) {
            income += TrasCosts;
        }
    }
    return income;

}