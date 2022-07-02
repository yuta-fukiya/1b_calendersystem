import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as IDPASS from "./C7ID,パスワード管理部/IDPASS.mjs";
import * as Schedule from "./C8スケジュール管理部/ShiftManagement.mjs";

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

const AskSchedule_js = fs.readFileSync('C3カレンダー設定処理部/AskSchedule.js', 'UTF-8');
const MainSchedule_js = fs.readFileSync('C3カレンダー設定処理部/MainSchedule.js', 'UTF-8');
const UpdateSchedule_js = fs.readFileSync('C3カレンダー設定処理部/UpdateSchedule.js', 'UTF-8');

const AskShiftData_js = fs.readFileSync('./C4シフト設定処理部/AskShiftData.js', 'UTF-8');
const MainJobs_js = fs.readFileSync('./C4シフト設定処理部/MainJobs.js', 'UTF-8');
const UpdateShiftData_js = fs.readFileSync('./C4シフト設定処理部/UpdateShiftData.js', 'UTF-8');

var login_txt;
var schedule_shift_txt;
var shift_txt;

const hostname = '127.0.0.1';
const port = 3000;

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
              result = await IDPASS.regist(idpass[1], idpass[2]);
            } else if (idpass[0] == "AskRegistration"){
              result = await IDPASS.check(idpass[1], idpass[2]);
            }
            console.log(result);
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
                result2 = await Schedule.ReturnShiftInformation(shift[2], shift[1]);
                result = result2[0];
            } else if (shift[0] == "update"){
                result = await Schedule.UpdateShiftInformation(shift[2], shift[1], shift[3]);
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

    case '/_shift.txt':
        var result = "false";
        if (req.method == "POST"){
          var postData = "";
          req.on("data", function(chunk){
            postData += chunk;
          })
          req.on("end", async function(){
            var shift = postData.split(",");
            if (shift[0] == "ask"){
                //データベース処理
            } else if (shift[0] == "update"){
                //データベース処理
            }
            console.log(result);
            fs.writeFileSync("./C9収支管理部/shift.txt", result);
            shift_txt = fs.readFileSync('./C9収支管理部/shift.txt', 'UTF-8');        
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(shift_txt);
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