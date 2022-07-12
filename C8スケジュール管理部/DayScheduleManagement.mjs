/*******************************************************************
***  File Name    : DayScheduleManagement.mjs
***  Version      : V1.0
***  Designer     : 猪腰大樹
***  Date         : 2022.7.12
***  Purpose      : 日付情報を登録・参照する
*******************************************************************/

import sqlite3 from "sqlite3";

/*****************************************************************
***function name     : ReturnDayScheduleInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 日付情報を参照する
***Return:           : 参照結果
 *******************************************************************/

export async function ReturnDayScheduleInformation(id, Date, name) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        var DayScheduledata = [];
        db.serialize(() => {
            db.each('SELECT count(*), id, Date, title, S_time, E_time, Memo FROM DayScheduledata WHERE id=$id and Date=$Date', { $id: id, $Date: Date }, function (err, row) {
                if (err) {
                    reject(err);
                }
                if(row['count(*)'] == 0){
                    DayInsert(id, Date);
                }
                if (name == 'title') {  // タイトル
                    DayScheduledata.push(row.title);
                    resolve(DayScheduledata);
                } else if (name == 'S_time') {  // 開始時刻
                    DayScheduledata.push(row.S_time);
                    resolve(DayScheduledata);
                } else if (name == 'E_time') {  // 終了時刻
                    DayScheduledata.push(row.E_time);
                    resolve(DayScheduledata);
                } else if (name == 'Memo') {    // メモ
                    DayScheduledata.push(row.Memo);
                    resolve(DayScheduledata);
                } else {
                    DayScheduledata.push(row.title);
                    DayScheduledata.push(row.S_time);
                    DayScheduledata.push(row.E_time);
                    DayScheduledata.push(row.Memo);
                    resolve(DayScheduledata);
                }
            });
        });
        db.close();
    })
}

/*****************************************************************
***function name     : UpdateDayScheduleInformation
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 日付情報を更新する
***Return            : 更新結果
 *******************************************************************/

export async function UpdateDayScheduleInformation(id, Date, name, DayScheduledata) {
    async function wait(){
    return new Promise((resolve, reject) => {
        var number = -1;
        if (name == 'title') {  // タイトル
            number = 0;
        } else if (name == 'S_time') {  // 開始時刻
            number = 1;
        } else if (name == 'E_time') {  // 終了時刻
            number = 2;
        } else if (name == 'Memo') {    // メモ
            number = 3;
        }
        if (number == -1) {
            const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
            db.serialize(() => {
                db.run('CREATE TABLE IF NOT EXISTS DayScheduledata (id TEXT, Date TEXT, title TEXT, S_time TEXT, E_time TEXT, Memo TEXT)');
                const stmt = db.prepare('INSERT INTO DayScheduledata VALUES (?, ?, ?, ?, ?, ?)');
                stmt.run([id, Date, DayScheduledata[0], DayScheduledata[1], DayScheduledata[2], DayScheduledata[3]]);
                stmt.finalize();
                resolve("success");
            });
            db.close();
        } else {
            const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
            db.serialize(() => {
                const stmt = db.prepare('UPDATE DayScheduledata SET ' + name + ' = ? WHERE id = ? and Date = ?', err => {
                    if (err) {
                        throw err;
                    }
                    stmt.run(DayScheduledata, id, Date);
                    stmt.finalize();
                    resolve("success");
                });
            });
            db.close();
        }
    })
    }
    const result = await wait();
    return result;    
}

/*****************************************************************
***function name     : DayInsert
***Designer          : 猪腰大樹
***Date              : 2022.7.12
***function          : 日付情報を新規登録する
 *******************************************************************/

async function DayInsert(id, Date) {
    async function wait(){
        return new Promise((resolve) => {
            const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
            db.serialize(() => {
                const stmt = db.prepare('INSERT INTO DayScheduledata VALUES (?, ?, ?, ?, ?, ?)');
                stmt.run(id, Date);
                stmt.finalize();
                resolve();
            });
            db.close();
        })
    }
    const result = await wait();
    return result;    
}
