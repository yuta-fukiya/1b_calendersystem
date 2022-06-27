//var xhr = new XMLHttpRequest();

const id = window.location.search.replace("?","");
/*****************************************************************
***function name     :CopyJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に問い合わせる
 *******************************************************************/

export function CopyJobName(){
    /*
    var data = [];
    data.push("Jobname");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    return "焼肉屋さん";
}        

/*******************************************
***function name     :CopyJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に問い合わせる
********************************************/

export function CopyJobTime(ProcessName){
    /*
    var data = [];
    data.push(ProcessName);
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    var sample = [];
    for (var i = 0; i < 14; i++){
        sample.push("12:12");
    }
    if (ProcessName == "WeekShift"){
        return sample;
    }else if (ProcessName == "MonthShift"){
        //return 
    }
}

/*****************************************************************
***function name     :CopyHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyHourWages(){
    /*
    var data = [];
    data.push("HourWages");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    return 1111;
}        

/*****************************************************************
***function name     :CopyTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に問い合わせる
 *******************************************************************/

export function CopyTrasCosts(){
    /*
    var data = [];
    data.push("TrasCosts");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    return 2222;
}        

/*****************************************************************
***function name     :CopyNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWages(){
    /*
    var data = [];
    data.push("NightWages");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    return 3333;
}        
/*****************************************************************
***function name     :CopyNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に問い合わせる
 *******************************************************************/

export function CopyNightWagesRange(){
    /*
    var data = [];
    data.push("NightWagesRange");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    var sample = [];
    sample.push("11:11");
    sample.push("22:22");
    return sample;
}        

/*****************************************************************
***function name     :CopyOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に問い合わせる
 *******************************************************************/

export function CopyOvertime(){
    /*
    var data = [];
    data.push("Overtime");
    data.push(id);
    xhr.open("POST", "./Shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText; 
            } else {
                return "err";
            }
        } else {
            return "err";
        }
    }*/
    return 4444;
}        

//管理部に応じて変更