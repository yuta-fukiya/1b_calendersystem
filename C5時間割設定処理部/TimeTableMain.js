/******************************************************
***File Name      :TimeTableMain.js
***Date           :2022.7.12
***Designer       :木野内　健人
***Purpose        :スケジュール管理部と授業情報の送受信を行う
*******************************************************/

import * as ask from "./AskTimeTable.js";
import * as update from "./UpdateTimeTable.js";


/******************************************************
***function name  :AskTimeTableJob
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部から授業情報を取得する
***Return         :問い合わせた授業情報
*******************************************************/

export function AskTimeTableJob(wday, period){
    var TimeTable = [];
        TimeTable.push(ask.CopyClass(wday, period)); // 授業名取得
        TimeTable.push(ask.CopyClassroom(wday, period)); // 教室名取得
        TimeTable.push(ask.CopyUnit(wday, period)); // 単位数取得
        TimeTable.push(ask.CopyProfessor(wday, period)); // 教授名取得
    return TimeTable;
}


/******************************************************
***function name  :UpdateTimeTableJob
***Designer       :木野内　健人
***Date           :2022.7.12
***Function       :スケジュール管理部へ入力された授業情報を送る
*******************************************************/

export function UpdateTimeTableJob(timetabledata){
    update.SendClass(timetabledata[0]); // 授業名送信
    update.sendClassroom(timetabledata[1]); // 教室名送信
    update.sendUnit(timetabledata[2]); // 単位数送信
    update.sendProfessor(timetabledata[3]); // 教授名送信
}
