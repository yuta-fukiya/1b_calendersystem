import {AskJobs} from "/MainJobs.js";
const id = window.location.search.replace("?","");

export function calculate(Day) {
    var income = 0.0;
    var Week = AskJobs("WeekShift_UI");
    var Month = AskJobs("MonthShift_UI");
    //return income;
    if (Week != null) {
        income += calWeek(Day);
    }
    if (Month != null) {
        income += calMonth(Day);
    }

    return income;
}


function calWeek(Day) {
    var income = 0.0;
    var delta = [2];
    var start = [2];
    var end = [2];

    var Shift = AskJobs("Shift_UI");
    var Week = AskJobs("WeekShift_UI");
    var Night_w = [14];
    var temp = [14];

    Shift[3] = parseInt(Shift[1]) * 1.25 + "";
    Shift[4] = parseInt(Shift[1]) * 1.25 + "";
    Shift[5] = "22:00";
    Shift[6] = "05:00";

    var HourWages = Shift[1];
    var TrasCosts = Shift[2];
    var NightWages = Shift[3];
    var Overtime = Shift[4];
    var Night_s = Shift[5].split(":");
    var Night_f = Shift[6].split(":");

    for (var i=0; i<14; i=i+2) {
        start = Week[i].split(":");
        end = Week[i+1].split(":");
        if (parseInt(start[0]) > parseInt(end[0])) {
            Week[i+1] = parseInt(end[0]) + 24 + ":" + end[1];
        } 
    }

    if (parseInt(Night_s[0]) > parseInt(Night_f[0])) {
        Night_f[0] = parseInt(Night_f[0]) + 24 + "";
    }

    for (var i=0; i<14; i=i+2) {
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
                Night_w[i+1] = Night_f;
                Week[i] = Night_s;
            }
        } else {
            Night_w[i] = Night_s;
            if (parseInt(end[0])<parseInt(Night_f[0]) || (parseInt(end[0])==parseInt(Night_f[0]) && parseInt(end[1])<parseInt(Night_f[1]))) {
                Night_w[i+1] = Week[i+1];
                Week[i+1] = Night_s;
                temp[i] = temp[i+1] = "00:00";
            } else {
                Night_w[i+1] = Night_f;
                temp[i] = Night_f;
                temp[i+1] = Week[i+1] 
                Week[i+1] = Night_s;
            }
        }
    }
    
    for (var i=0; i<Day; ++i) {
        start = Week[i*2%14].split(":");
        end = Week[(i*2+1)%14].split(":");
        var temp2 = income;
        for (var j=0; j<2; ++j) {
            delta[j] = parseInt(start[j], 10)  - parseInt(start[j], 10);
        }
        if (delta[0]>=8){
            income += 8*HourWages;
            income += (delta[0]+delta[1]/60-8)*Overtime;
        } else {
            income += (delta[0]+delta[1]/60)*HourWages;
        }

        start = Night_w[j].split(":");
        end = Night_w[j+1].split(":");
        for (var j=0; j<2; ++j) {
            delta[j] = parseInt(start[j], 10)  - parseInt(start[j], 10);
        }
        if (delta[0]>=8){
            income += 8*HourWages*1.25;
            income += (delta[0]+delta[1]/60-8)*HourWages*1.5;
        } else {
            income += (delta[0]+delta[1]/60)*NightWages;
        }
        
        start = temp[j].split(":");
        end = temp[j+1].split(":");
        for (var j=0; j<2; ++j) {
            delta[j] = parseInt(start[j], 10)  - parseInt(start[j], 10);
        }
        if (delta[0]>=8){
            income += 8*HourWages;
            income += (delta[0]+delta[1]/60-8)*Overtime;
        } else {
            income += (delta[0]+delta[1]/60)*HourWages;
        }

        if (temp2 != income) {
            income += TrasCosts;
        }
    }

    return income;
}