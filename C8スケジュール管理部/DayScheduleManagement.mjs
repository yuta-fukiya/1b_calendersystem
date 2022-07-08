import sqlite3 from "sqlite3";

export async function ReturnDayScheduleInformation(id, Date, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        var DayScheduledata = [];
        db.serialize(() => {
            db.each('SELECT count(*), id, title, S_time, E_time, Memo FROM DayScheduledata WHERE id=$id', {$id: id}, function(err, row) {
                if (err) {
                    reject(err);
                }
                if(row['count(*)'] == 0){
                    DayInsert(id);
                }
                if (name == 'title') {
                    DayScheduledata.push(row.Title);
                    resolve(DayScheduledata);
                } else if (name == 'S_time') {
                    DayScheduledata.push(row.t_hour);
                    resolve(DayScheduledata);
                } else if (name == 'E_time') {
                    DayScheduledata.push(row.t_minute);
                    resolve(DayScheduledata);
                } else if (name == 'Memo') {
                    DayScheduledata.push(row.memo);
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

export async function UpdateDayScheduleInformation(id, name, DayScheduledata){
    var number = -1;
    if(name == 'title') {
        number = 0;
    } else if(name == 'S_time') {
        number = 1;
    } else if (name == 'E_time') {
        number = 2;
    } else if (name == 'Memo') {
        number = 3;
    } 
    if(number == -1) {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS DayScheduledata (id TEXT, title TEXT, S_time TEXT, E_time TEXT, Memo TEXT)');
            const stmt = db.prepare('INSERT INTO DayScheduledata VALUES (?, ?, ?, ?, ?)');
            stmt.run([id, DayScheduledata[0], DayScheduledata[1], DayScheduledata[2], DayScheduledata[3]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE DayScheduledata SET ' + name + ' = ? WHERE id = ?', err => {
                if (err) {
                    throw err;
                }
                stmt.run(DayScheduledata[number], id);
                stmt.finalize();
            });
        });
        db.close();
    }
    return true;
}

async function DayInsert(id) {
    const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO DayScheduledata VALUES (?, ?, ?, ?, ?)');
        stmt.run(id);
        stmt.finalize();
    });
    db.close();
}

//-----------------------------------------------------------------------------------------------
async function test() {
    var DayScheduledata = new Array('水族館', 12, 30, 18, 0, 'チケットを忘れずに', "2022/07/02");
    var id = 'al20116';
    var name1 = 'NULL'; 
    var name2 = 'memo';
    var Date = '2022/07/02';
    var Judge;
    Judge = await UpdateDayScheduleInformation(id, name1, DayScheduledata);
    if (Judge == true) {
        console.log('true');
    } else {
        console.log('false');
    }
    var c = [];
    c = await ReturnDayScheduleInformation(id, Date, name2);
    console.log(c);
}



//test();