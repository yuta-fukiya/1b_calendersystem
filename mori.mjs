import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as IDPASS from "./C7ID,パスワード管理部/IDPASS.mjs";

const LoginDisplay_html = fs.readFileSync('./W1ログイン/LoginDisplay.html', 'UTF-8');
const RegistDisplay_html = fs.readFileSync('./W1ログイン/RegistDisplay.html', 'UTF-8');
const LoginDisplay_js = fs.readFileSync('./W1ログイン/LoginDisplay.js', 'UTF-8');
const LoginDisplay_css = fs.readFileSync('./W1ログイン/LoginDisplay.css', 'UTF-8');
const LoginDisplay_cssmap = fs.readFileSync('./W1ログイン/LoginDisplay.css.map', 'UTF-8');
const LoginDisplay_scss = fs.readFileSync('./W1ログイン/LoginDisplay.scss', 'UTF-8');

const MainDisplay_html = fs.readFileSync('./W2メイン/MainDisplay.html', 'UTF-8');
const MainDisplay_js = fs.readFileSync('./W2メイン/MainDisplay.js', 'UTF-8');
const MainDisplay_css = fs.readFileSync('./W2メイン/MainDisplay.css', 'UTF-8');
const MainDisplay_cssmap = fs.readFileSync('./W2メイン/MainDisplay.css.map', 'UTF-8');
const MainDisplay_scss = fs.readFileSync('./W2メイン/MainDisplay.scss', 'UTF-8');

const ShiftDisplay_html = fs.readFileSync('./W6シフト/ShiftDisplay.html', 'UTF-8');
const ShiftDisplay_js = fs.readFileSync('./W6シフト/ShiftDisplay.js', 'UTF-8');
const ShiftDisplay_css = fs.readFileSync('./W6シフト/ShiftDisplay.css', 'UTF-8');
const WeekDisplay_html = fs.readFileSync('./W7週別シフト/WeekDisplay.html', 'UTF-8');
const WeekDisplay_js = fs.readFileSync('./W7週別シフト/WeekDisplay.js', 'UTF-8');
const WeekDisplay_css = fs.readFileSync('./W7週別シフト/WeekDisplay.css', 'UTF-8');
const MonthDisplay_html = fs.readFileSync('./W8月別シフト/MonthDisplay.html', 'UTF-8');
const MonthDisplay_css = fs.readFileSync('./W8月別シフト/MonthDisplay.css', 'UTF-8');

const AskShiftData_js = fs.readFileSync('./C4シフト設定処理部/AskShiftData.js', 'UTF-8');
const MainJobs_js = fs.readFileSync('./C4シフト設定処理部/MainJobs.js', 'UTF-8');
const UpdateShiftData_js = fs.readFileSync('./C4シフト設定処理部/UpdateShiftData.js', 'UTF-8');

var login_txt;

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
            
    case '/LoginDisplay.css.map':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(LoginDisplay_cssmap);
        res.end();
        break;
                 
    case '/LoginDisplay.scss':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(LoginDisplay_scss);
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

    case '/MainDisplay.css.map':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(MainDisplay_cssmap);
        res.end();
        break;

    case '/MainDisplay.scss':
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(MainDisplay_scss);
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

    default:
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('お探しのページは見つかりません。');
        break;
  }
}