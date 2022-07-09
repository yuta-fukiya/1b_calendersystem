import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as IDPASS from "./C7ID,パスワード管理部/IDPASS.mjs";
import * as Schedule from "./C8スケジュール管理部/ShiftManagement.mjs";
import * as Salary from "./C9収支管理部/SalaryManagement.mjs";
import * as DaySchedule from "./C8スケジュール管理部/DayScheduleManagement.mjs";
import * as timetable from "./C8スケジュール管理部/TimetableManagement.mjs";

const LoginDisplay_html = fs.readFileSync('./W1ログイン/LoginDisplay.html', 'UTF-8');
const RegistDisplay_html = fs.readFileSync('./W1ログイン/RegistDisplay.html', 'UTF-8');
const LoginDisplay_js = fs.readFileSync('./W1ログイン/LoginDisplay.js', 'UTF-8');
const LoginDisplay_css = fs.readFileSync('./W1ログイン/LoginDisplay.css', 'UTF-8');

const MainDisplay_html = fs.readFileSync('./W2メイン/MainDisplay.html', 'UTF-8');
const MainDisplay_js = fs.readFileSync('./W2メイン/MainDisplay.js', 'UTF-8');
const MainDisplay_css = fs.readFileSync('./W2メイン/MainDisplay.css', 'UTF-8');

const daySchedule_html = fs.readFileSync('./W3日別/daySchedule.html', 'UTF-8');
const daySchedule_css = fs.readFileSync('./W3日別/daySchedule.css', 'UTF-8');
const daySchedule_js = fs.readFileSync('./W3日別/daySchedule.js', 'UTF-8');

const timetable_html = fs.readFileSync('./W4時間割/timetable.html', 'UTF-8');
const timetable_js = fs.readFileSync('./W4時間割/timetable.js', 'UTF-8');
const timetable_css = fs.readFileSync('./W4時間割/timetable.css', 'UTF-8');

const timetabledetail_html = fs.readFileSync('./W5時間割詳細/timetabledetail.html', 'UTF-8');
const timetabledetail_js = fs.readFileSync('./W5時間割詳細/timetabledetail.js', 'UTF-8');
const timetabledetail_css = fs.readFileSync('./W5時間割詳細/timetabledetail.css', 'UTF-8');

const ShiftDisplay_html = fs.readFileSync('./W6シフト/ShiftDisplay.html', 'UTF-8');
const ShiftDisplay_js = fs.readFileSync('./W6シフト/ShiftDisplay.js', 'UTF-8');
const ShiftDisplay_css = fs.readFileSync('./W6シフト/ShiftDisplay.css', 'UTF-8');

const WeekDisplay_html = fs.readFileSync('./W7週別シフト/WeekDisplay.html', 'UTF-8');
const WeekDisplay_js = fs.readFileSync('./W7週別シフト/WeekDisplay.js', 'UTF-8');
const WeekDisplay_css = fs.readFileSync('./W7週別シフト/WeekDisplay.css', 'UTF-8');

const MonthDisplay_html = fs.readFileSync('./W8月別シフト/MonthDisplay.html', 'UTF-8');
const MonthDisplay_css = fs.readFileSync('./W8月別シフト/MonthDisplay.css', 'UTF-8');
const MonthDisplay_js = fs.readFileSync('./W8月別シフト/MonthDisplay.js', 'UTF-8');

const MainLogin_js = fs.readFileSync('./C2認証処理部/MainLogin.js', 'UTF-8');

const AskSchedule_js = fs.readFileSync('C3カレンダー設定処理部/AskSchedule.js', 'UTF-8');
const MainSchedule_js = fs.readFileSync('C3カレンダー設定処理部/MainSchedule.js', 'UTF-8');
const UpdateSchedule_js = fs.readFileSync('C3カレンダー設定処理部/UpdateSchedule.js', 'UTF-8');

const AskShiftData_js = fs.readFileSync('./C4シフト設定処理部/AskShiftData.js', 'UTF-8');
const MainJobs_js = fs.readFileSync('./C4シフト設定処理部/MainJobs.js', 'UTF-8');
const UpdateShiftData_js = fs.readFileSync('./C4シフト設定処理部/UpdateShiftData.js', 'UTF-8');

const AskTimeTable_js = fs.readFileSync('./C5時間割設定処理部/AskTimeTable.js', 'UTF-8');
const TimeTableMain_js = fs.readFileSync('./C5時間割設定処理部/TimeTableMain.js', 'UTF-8');
const UpdateTimeTable_js = fs.readFileSync('./C5時間割設定処理部/UpdateTimeTable.js', 'UTF-8');

var login_txt;
var schedule_shift_txt;
var DaySchedule_txt;
var salary_txt;
var schedule_timetable_txt;

const hostname = '127.0.0.1';  //0.0.0.0
const port = 8000;   //80

const server = http.createServer(RouteSetting);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function RouteSetting(req, res) {
  const url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
    case '/LoginDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(LoginDisplay_html);
        res.end();
        break;

    case '/RegistDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(RegistDisplay_html);
        res.end();
        break;

    case '/LoginDisplay.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(LoginDisplay_js);
        res.end();
        break;

    case '/LoginDisplay.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(LoginDisplay_css);
        res.end();
        break;
            
    case '/MainDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(MainDisplay_html);
        res.end();
        break;

    case '/MainDisplay.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(MainDisplay_js);
        res.end();
        break;

    case '/MainDisplay.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(MainDisplay_css);
        res.end();
        break;

    case '/daySchedule.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(daySchedule_html);
        res.end();
        break;

    case '/daySchedule.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(daySchedule_css);
        res.end();
        break;

    case '/daySchedule.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(daySchedule_js);
        res.end();
        break;

    case '/timetable.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(timetable_html);
        res.end();
        break;
    
    case '/timetable.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(timetable_js);
        res.end();
        break;
      
    case '/timetable.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(timetable_css);
        res.end();
        break;

    case '/timetabledetail.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(timetabledetail_html);
        res.end();
        break;
    
    case '/timetabledetail.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(timetabledetail_js);
        res.end();
        break;
      
    case '/timetabledetail.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(timetabledetail_css);
        res.end();
        break;

    case '/ShiftDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(ShiftDisplay_html);
        res.end();
        break;

    case '/ShiftDisplay.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(ShiftDisplay_js);
        res.end();
        break;
  
    case '/ShiftDisplay.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(ShiftDisplay_css);
        res.end();
        break;
      
    case '/WeekDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(WeekDisplay_html);
        res.end();
        break;

    case '/WeekDisplay.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(WeekDisplay_js);
        res.end();
        break;        

    case '/WeekDisplay.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(WeekDisplay_css);
        res.end();
        break;
    
    case '/MonthDisplay.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(MonthDisplay_html);
        res.end();
        break;

    case '/MonthDisplay.css':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(MonthDisplay_css);
        res.end();
        break;

    case '/MonthDisplay.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(MonthDisplay_js);
        res.end();
        break;
    
    case '/MainLogin.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(MainLogin_js);
        res.end();
        break;

    case '/MainJobs.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(MainJobs_js);
        res.end();
        break;

    case '/AskShiftData.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(AskShiftData_js);
        res.end();
        break;

    case '/UpdateShiftData.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(UpdateShiftData_js);
        res.end();
        break;

    case '/AskSchedule.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(AskSchedule_js);
        res.end();
        break;

    case '/MainSchedule.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(MainSchedule_js);
        res.end();
        break;

    case '/UpdateSchedule.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(UpdateSchedule_js);
        res.end();
        break;

    case '/UpdateTimeTable.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(UpdateTimeTable_js);
        res.end();
        break;

    case '/AskTimeTable.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(AskTimeTable_js);
        res.end();
        break;

    case '/TimeTableMain.js':
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(TimeTableMain_js);
        res.end();
        break;

    case '/login.txt':
        var result = "false";
        if (req.method == "POST"){
          var postData = "";
          req.on("data", function(chunk){
            postData += chunk;
          })
          req.on("end", async function(){
            var idpass = postData.split(",");
            if (idpass[0] == "UserRegistration"){
              result = await IDPASS.RegistUser(idpass[1], idpass[2]);
            } else if (idpass[0] == "AskRegistration"){
              result = await IDPASS.CheckUser(idpass[1], idpass[2]);
            }
            fs.writeFileSync("./C7ID,パスワード管理部/login.txt", result);
            login_txt = fs.readFileSync('./C7ID,パスワード管理部/login.txt', 'UTF-8');        
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(login_txt);
            res.end();
          })
        }
        break;
    
    case '/schedule_shift.txt':
        var result = "false";
        var result2 = [];
        if (req.method == "POST"){
          var postData = "";
          req.on("data", function(chunk){
            postData += chunk;
          })
          req.on("end", async function(){
            var shift = postData.split(",");
            if (shift[0] == "ask"){
                result2 = await Schedule.ReturnShiftInformation(shift[2], shift[3], shift[4], shift[1]);
                result = result2[0];
            } else if (shift[0] == "update"){
                result = await Schedule.UpdateShiftInformation(shift[2], shift[3], shift[4], shift[1], shift[5]);
            }
            if (result == null || result == ""){
                result = "none";
            }
            fs.writeFileSync("./C8スケジュール管理部/schedule_shift.txt", result);
            schedule_shift_txt = fs.readFileSync('./C8スケジュール管理部/schedule_shift.txt', 'UTF-8');        
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(schedule_shift_txt);
            res.end();
          })
        }
        break;

      case '/DaySchedule.txt':
          var result = "false";
          var result2 = [];
          if (req.method == "POST") {
              var postData = "";
              req.on("data", function (chunk) {
                  postData += chunk;
              })
              req.on("end", async function () {
                  var daySchedule = postData.split(",");
                  if (daySchedule[0] == "ask") {
                      result2 = await DaySchedule.ReturnDayScheduleInformation(daySchedule[2], daySchedule[3], daySchedule[1]);
                      result = result2[0];
                  } else if (daySchedule[0] == "update") {
                      result = await DaySchedule.UpdateDayScheduleInformation(daySchedule[2], daySchedule[3], daySchedule[1], daySchedule[4]);
                  }
                  if (result == null || result == "") {
                      result = "none";
                  }
                  fs.writeFileSync("./C8スケジュール管理部/DaySchedule.txt", result);
                  DaySchedule_txt = fs.readFileSync('./C8スケジュール管理部/DaySchedule.txt', 'UTF-8');
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  res.write(DaySchedule_txt);
                  res.end();
              })
          }
          break;

    case '/salary.txt':
        var result = "false";
        if (req.method == "POST"){
          var postData = "";
          req.on("data", function(chunk){
            postData += chunk;
          })
          req.on("end", async function(){
            var salary = postData.split(",");
            if (salary[0] == "ask"){
                result = await Salary.AskWages(salary[2],salary[3], salary[4], salary[1]);
            } else if (salary[0] == "update"){
                result = await Salary.UpdateWages(salary[2], salary[3], salary[4],salary[1], salary[5]);
            }
            fs.writeFileSync("./C9収支管理部/salary.txt", result);
            salary_txt = fs.readFileSync('./C9収支管理部/salary.txt', 'UTF-8');        
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(salary_txt);
            res.end();
          })
        }
        break;

        case '/schedule_timetable.txt':
            var result = "false";
            var result2 = [];
            if (req.method == "POST"){
              var postData = "";
              req.on("data", function(chunk){
                postData += chunk;
              })
              req.on("end", async function(){
                var timetable2 = postData.split(",");
                if (timetable2[4] == "ask"){
                    result2 = await timetable.ReturnTimetableInformation(timetable2[0], timetable2[2], timetable2[3], timetable2[1]);
                    result = result2[0];
                } else if (timetable2[0] == "update"){
                    result = await timetable.UpdateTimetableInformation(timetable2[2], timetable2[3], timetable2[4], timetable2[1], timetable2[5]);
                }
                if (result == null || result == ""){
                    result = "none";
                }
                fs.writeFileSync("./C8スケジュール管理部/schedule_timetable.txt", result);
                schedule_timetable_txt = fs.readFileSync('./C8スケジュール管理部/schedule_timetable.txt', 'UTF-8');        
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(schedule_timetable_txt);
                res.end();
              })
            }
            break;

    default:
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('お探しのページは見つかりません。');
        break;
  }
}