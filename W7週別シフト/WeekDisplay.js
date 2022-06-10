/*import AskJobs from MainJob;
  import UpdateJobs from MainJob;
/*****************************************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :現在カレンダーに反映しているシフト時間を反映する
 *******************************************************************/

function Week_DataInit(){
 //   var weekshift = AskJobs("WeekShift_UI");

    document.getElementById("weekshift_sun_s").value = "12:00"; //weekshift[0]; 
    document.getElementById("weekshift_sun_f").value = "12:00"; //weekshift[1];
    document.getElementById("weekshift_mon_s").value = "12:00"; //weekshift[2];
    document.getElementById("weekshift_mon_f").value = "12:00"; //weekshift[3];
    document.getElementById("weekshift_tue_s").value = "12:00"; //weekshift[4];
    document.getElementById("weekshift_tue_f").value = "12:00"; //weekshift[5];
    document.getElementById("weekshift_wed_s").value = "12:00"; //weekshift[6];
    document.getElementById("weekshift_wed_f").value = "12:00"; //weekshift[7];
    document.getElementById("weekshift_thu_s").value = "12:00"; //weekshift[8];
    document.getElementById("weekshift_thu_f").value = "12:00"; //weekshift[9];
    document.getElementById("weekshift_fri_s").value = "12:00"; //weekshift[10];
    document.getElementById("weekshift_fri_f").value = "12:00"; //weekshift[11];
    document.getElementById("weekshift_sut_s").value = "12:00"; //weekshift[12];
    document.getElementById("weekshift_sut_f").value = "12:00"; //weekshift[13];
}
window.onload = Week_DataInit;
     
/*******************************************
***function name     :Week_DataSave
***Designer          :吹谷　優太
***Date              :
***function          :シフト設定処理部に週別シフトのデータを送る
 ********************************************/

function Week_DataSave(){
    var weekshift = [];
 
    weekshift.push = document.getElementById("weekshift_sun_s").value;
    weekshift.push = document.getElementById("weekshift_sun_f").value;
    weekshift.push = document.getElementById("weekshift_mon_s").value;
    weekshift.push = document.getElementById("weekshift_mon_f").value;
    weekshift.push = document.getElementById("weekshift_tue_s").value;
    weekshift.push = document.getElementById("weekshift_tue_f").value;
    weekshift.push = document.getElementById("weekshift_wed_s").value;
    weekshift.push = document.getElementById("weekshift_wed_f").value;
    weekshift.push = document.getElementById("weekshift_thu_s").value; 
    weekshift.push = document.getElementById("weekshift_thu_f").value;
    weekshift.push = document.getElementById("weekshift_fri_s").value;
    weekshift.push = document.getElementById("weekshift_fri_f").value;
    weekshift.push = document.getElementById("weekshift_sut_s").value;
    weekshift.push = document.getElementById("weekshift_sut_f").value;
 
    UpdateJobs(weekshift, "WeekShift_UI");
}
 