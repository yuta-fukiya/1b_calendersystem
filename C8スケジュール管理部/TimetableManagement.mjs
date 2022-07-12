/*******************************************************************
***  File Name    : TimetableManagement.mjs
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 時間割情報を登録・参照する
*******************************************************************/

import sqlite3 from "sqlite3";

/*****************************************************************
***function name     : ReturnTimetableInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 時間割情報を参照する
***Return:           : 参照結果
 *******************************************************************/

export async function ReturnTimetableInformation(id, wday, period, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        var Timetabledata = [];
        db.serialize(() => {
            db.each('SELECT count(*), id, wday, period, Class_name, Class_room, Unit_num, Teacher_name FROM Timetabledata WHERE id=$id and wday=$wday and period=$period', {$id: id, $wday: wday, $period: period}, function(err, row) {
                if (err) {
                    reject(err);
                } 
                if (row['count(*)']==0 && wday!="" &&period!=""){
                    TimeInsert(id, wday, period);
                }
                if (name == 'Class_name') { // 授業名
                    Timetabledata.push(row.Class_name);
                    resolve(Timetabledata);
                } else if (name == 'Class_room') {  // 教室名
                    Timetabledata.push(row.Class_room);
                    resolve(Timetabledata);
                } else if (name == 'Unit_num') {    // 単位数
                    Timetabledata.push(row.Unit_num);
                    resolve(Timetabledata);
                } else if (name == 'Teacher_name') {    // 担当教授
                    Timetabledata.push(row.Teacher_name);
                    resolve(Timetabledata);
                } else {
                    Timetabledata.push(row.Class_name);
                    Timetabledata.push(row.Class_room);
                    Timetabledata.push(row.Unit_num);
                    Timetabledata.push(row.Teacher_name);
                    resolve(Timetabledata);
                }
            });
        });
        db.close();
    })
}

/*****************************************************************
***function name     : UpdateTimetableInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 時間割情報を更新する
***Return            : 更新結果
 *******************************************************************/

export async function UpdateTimetableInformation(id, wday, period, name, Timetabledata){
    var number = -1;
    if(name == 'Class_name') { // 授業名
        number = 0;
    } else if(name == 'Class_room') {  // 教室名
        number = 1;
    } else if (name == 'Unit_num') {    // 単位数
        number = 2;
    } else if (name == 'Teacher_name') {    // 担当教授
        number = 3;
    }

    if(number == -1) {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS Timetabledata (id TEXT, wday TEXT, period TEXT, Class_name TEXT, Class_room TEXT, Unit_num TEXT, Teacher_name TEXT)');
            const stmt = db.prepare('INSERT INTO Timetabledata VALUES (?, ?, ?, ?, ?, ?, ?)');
            stmt.run([id, wday, period, Timetabledata[0], Timetabledata[1], Timetabledata[2], Timetabledata[3]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE Timetabledata SET ' + name + ' = ? WHERE id = ? and wday = ? and period = ?', err => {
                if (err) {
                    throw err;
                }
                stmt.run(Timetabledata, id, wday, period);
                stmt.finalize();
            });
        });
        db.close();
    }
    return "success";
}

/*****************************************************************
***function name     : TimeInsert
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 時間割情報を新規登録する
 *******************************************************************/

async function TimeInsert(id, wday, period) {
    const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO Timetabledata VALUES (?, ?, ?, ?, ?, ?, ?)');
        stmt.run(id, wday, period);
        stmt.finalize();
    });
    db.close();
}
