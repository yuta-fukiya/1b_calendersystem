//popupを表示
function popup(){
    window.open('../W3日別/DayDisplay.html', null ,'top=200,left=200,width=600,height=600');
    }
const week=["日","月","火","水","木","金","土"];
const today=new Date();//組み込み関数 newでインスタンス化//
let showdate=new Date(today.getFullYear(),today.getMonth(),1);//年,月,一日を取得//

let request;
let income_value=1000;
let spending_value=10000;

window.onload=function(){
    showProcess(today,calender);
    ShowMoney();
}
function ShowMoney(){
    ShowIncome=document.getElementById('income');
    ShowIncome.innerHTML = "収入"+income_value+"円";
    ShowSpending=document.getElementById('spending');
    ShowSpending.innerHTML="支出"+spending_value+"円";
}
// window.onloadはHTMLが読み込まれた直後に実行される関数

function prev(){
    showdate.setMonth(showdate.getMonth() -1);//setmonthは引数の月の0日に現在の値の月の日数を足す
    showProcess(showdate);
}

function next(){
    showdate.setMonth(showdate.getMonth() +1);//setmonthは引数の月の0日に現在の値の月の日数を足す
    showProcess(showdate);
}
function TopPage(){
    showProcess(today,calender);
}

function showProcess(date,calender){
    let year=date.getFullYear();
    let month=date.getMonth();
    document.querySelector('#header').innerHTML=year+"年"+(month+1)+"月";
    //id="#header"に年月を表示 getmonthは0で始まるので+1//
    calender=createProcess(year,month);
    document.querySelector('#calender').innerHTML=calender;
}

function createProcess(year,month){
    let calender="<table><tr class='dayOfWeek'>";//文字列定義
    for(let i=0;i<week.length;i++){
        calender+="<th>"+week[i]+"</th>";//<th>はTableHeader データに対する見出しに使う
    }
    calender+="</tr>";
    let count=0;//日付のカウント//
    let startDayOfWeek=new Date(year,month,1).getDay();//表示する月の1日の曜日//
    let endDate=new Date(year,month+1,0).getDate();//末日//
    let lastMonthOfDate=new Date(year,month,0).getDate();//先月の末日//
    let row=Math.ceil((startDayOfWeek+endDate)/week.length);//カレンダーの行数//
 
function js_arert(){
    alert("test");
}
    // 1行ずつ設定
for (let i = 0; i < row; i++) {
    calender += "<tr>";
    // 1colum単位で設定
    for (let j = 0; j < week.length; j++) {
        if (i == 0 && j < startDayOfWeek) {
            // 1行目で1日まで先月の日付を設定
            calender += "<td class='disabled'>"
                     + (lastMonthOfDate - startDayOfWeek + j + 1) + "</td>";
        } else if (count >= endDate) {
            // 最終行で最終日以降、翌月の日付を設定
            count++;
            calender += "<td class='disabled'>" + (count - endDate) + "</td>";
        } else {
            // 当月の日付を曜日に照らし合わせて設定
            count++;
            if(year == today.getFullYear()
              && month == (today.getMonth())
              && count == today.getDate()){
                calender += "<td class='today today_cell' onclick='popup()'>"  + "<li class='number'>"+count+"</li>" +  "</td>";
            } else if(year == 2022
            && month +1== 6
            && count == 15){ 
                calender += "<td class='days cell' onclick='popup()'>"+  "<li class='number'>" +count +"</li>" +"<li class='schedule college'>授業</li>"+ "</div>" +"</td>";
            }else{
                calender += "<td class='days cell' onclick='popup()'>"+  "<li class='number'>" +count +"</li>" + "</div>" +"</td>";
            }
        }
    }
    calender += "</tr>";
}
return calender;
}