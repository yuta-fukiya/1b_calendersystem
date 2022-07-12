/*******************************************************************
***  File Name    : ShiftManagement.mjs
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : シフト情報を登録・参照する
*******************************************************************/

import sqlite3 from "sqlite3";

/*****************************************************************
***function name     : ReturnShiftInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : シフト情報を参照する
***Return:           : 参照結果
 *******************************************************************/

export async function ReturnShiftInformation(id, year, month, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        var Shiftdata = [];
        db.serialize(() => {
            db.each('SELECT count(*), id, JobName, WeekShift, MonthShift FROM Shiftdata WHERE id=$id and year=$year and month=$month', {$id: id, $year: year, $month: month}, function(err, row) {
                if (err) {
                    reject(err);
                }
                if (row['count(*)']==0) {
                    ShiftInsert(id, year, month);
                }
                if (name == 'JobName') {    // アルバイト名
                    Shiftdata.push(row.JobName);
                    resolve(Shiftdata);
                } else if (name == 'WeekShift') {   // 週別シフト時間
                    Shiftdata.push(row.WeekShift);
                    resolve(Shiftdata);
                } else if (name == 'MonthShift') {  // 月別シフト時間
                    Shiftdata.push(row.MonthShift);
                    resolve(Shiftdata);
                } else {
                    Shiftdata.push(row.JobName);
                    Shiftdata.push(row.WeekShift);
                    Shiftdata.push(row.MonthShift);
                    resolve(Shiftdata);
                }
            });
        });
        db.close();
    })
}

/*****************************************************************
***function name     : UpdateShiftInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : シフト情報を更新する
***Return            : 更新結果
 *******************************************************************/

export async function UpdateShiftInformation(id, year, month, name, Shiftdata){
    var number = -1;
    if(name == 'JobName') { // アルバイト名
        number = 0;
    } else if(name == 'WeekShift') {    // 週別シフト時間
        number = 1;
    } else if (name == 'MonthShift') {  // 月別シフト時間
        number = 2;
    }
    if(number == -1) {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS Shiftdata (id TEXT, year TEXT, month TEXT, JobName TEXT, WeekShift TEXT, MonthShift TEXT)');
            const stmt = db.prepare('INSERT INTO Shiftdata VALUES (?, ?, ?, ?, ?, ?)');
            stmt.run([id, year, month, Shiftdata[0], Shiftdata[1], Shiftdata[2]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE Shiftdata SET ' + name + ' = ? WHERE id = ? and year = ? and month = ?', err => {
                if (err) {
                    throw err;
                }
                stmt.run(Shiftdata, id, year, month);
                stmt.finalize();
            });
        });
        db.close();
    }
    return "success";
}

/*****************************************************************
***function name     : ShiftInsert
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : シフト情報を新規登録する
 *******************************************************************/

async function ShiftInsert(id, year, month) {
    const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO Shiftdata VALUES (?, ?, ?, ?, ?, ?)');
        stmt.run(id, year, month);
        stmt.finalize();
    });
    db.close();
}
