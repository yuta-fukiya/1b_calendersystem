//var xhr = new XMLHttpRequest();
const id = window.location.search.replace("?","");
/*****************************************************************
***function name     :SendJobName
***Designer          :吹谷　優太
***Date              :
***function          :アルバイト名をスケジュール管理部に送る
 *******************************************************************/

export function SendJobName(shiftdata){
    var result;
    var data = [];
    data.push("update");
    data.push("JobName");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./Scedule_shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
}        

/*******************************************
***function name     :SendJobTime
***Designer          :吹谷　優太
***Date              :
***function          :シフト時間をスケジュール管理部に送る
********************************************/
   
export function SendJobTime(ProcessName, shiftdata){
    /*
    var result;
    var data = [];
    data.push("update")
    data.push(ProsessName);
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./schedule_shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    ProcessName=0;
    shiftdata=0;
}
/*****************************************************************
***function name     :SendHourWages
***Designer          :吹谷　優太
***Date              :
***function          :時給を収支管理部に送る
 *******************************************************************/

export function SendHourWages(shiftdata){
       /*
    var result;
    var data = [];
    data.push("UHourWages");
    data.push(shiftdata);
    xhr.open("POST", "./shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    shiftdata=0;
}        

/*****************************************************************
***function name     :SendTrasCosts
***Designer          :吹谷　優太
***Date              :
***function          :交通費を収支管理部に送る
 *******************************************************************/

export function SendTrasCosts(shiftdata){
       /*
    var result;
    var data = [];
    data.push("UTrasCosts");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    shiftdata=0;
}        

/*****************************************************************
***function name     :SendNightWages
***Designer          :吹谷　優太
***Date              :
***function          :深夜給を収支管理部に送る
 *******************************************************************/

export function SendNightWages(shiftdata){
       /*
    var result;
    var data = [];
    data.push("UNightWages");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    shiftdata=0;
}        
/*****************************************************************
***function name     :SendNightWagesRange
***Designer          :吹谷　優太
***Date              :
***function          :深夜給時間帯を収支管理部に送る
 *******************************************************************/

export function SendNightWagesRange(shiftdata){
       /*
    var result;
    var data = [];
    data.push("UNightWagesTime");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    shiftdata=0;
}        

/*****************************************************************
***function name     :SendOvertime
***Designer          :吹谷　優太
***Date              :
***function          :残業代を収支管理部に送る
 *******************************************************************/

export function SendOvertime(shiftdata){
       /*
    var result;
    var data = [];
    data.push("UOverTime");
    data.push(id);
    data.push(shiftdata);
    xhr.open("POST", "./shift.txt", true);
    xhr.send(data);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4){
            if(this.status === 200 || this.status == 0){
                return this.responseText;  //success or false       
            }
        }
    }
    */
    shiftdata=0;
}        