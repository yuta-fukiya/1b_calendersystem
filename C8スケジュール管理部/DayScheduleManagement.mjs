import sqlite3 from "sqlite3";

export async function ReturnDayScheduleInformation(id, Date, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('Schedule.sqlite');
        var DayScheduledata = [];
        db.serialize(() => {
            db.each('SELECT id, Title, f_hour, f_minute, t_hour, t_minute, memo, Date FROM DayScheduledata WHERE id=$id and Date=$Date', {$id: id, $Date: Date}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (name == 'Title') {
                    DayScheduledata.push(row.Title);
                    resolve(DayScheduledata);
                } else if (name == 'f_hour') {
                    DayScheduledata.push(row.f_hour);
                    resolve(DayScheduledata);
                } else if (name == 'f_minute') {
                    DayScheduledata.push(row.f_minute);
                    resolve(DayScheduledata);
                } else if (name == 't_hour') {
                    DayScheduledata.push(row.t_hour);
                    resolve(DayScheduledata);
                } else if (name == 't_minute') {
                    DayScheduledata.push(row.t_minute);
                    resolve(DayScheduledata);
                } else if (name == 'memo') {
                    DayScheduledata.push(row.memo);
                    resolve(DayScheduledata);
                } else if (name == 'Date') {
                    DayScheduledata.push(row.Date);
                    resolve(DayScheduledata);
                } else {
                    DayScheduledata.push(row.Title);
                    DayScheduledata.push(row.f_hour);
                    DayScheduledata.push(row.f_minute);
                    DayScheduledata.push(row.t_hour);
                    DayScheduledata.push(row.t_minute);
                    DayScheduledata.push(row.memo);
                    DayScheduledata.push(row.Date);
                    resolve(DayScheduledata);
                }
            });
        });
        db.close();
    })
}

export async function UpdateDayScheduleInformation(id, name, DayScheduledata){
    var number = -1;
    if(name == 'Title') {
        number = 0;
    } else if(name == 'f_hour') {
        number = 1;
    } else if (name == 'f_minute') {
        number = 2;
    } else if (name == 't_hour') {
        number = 3;
    } else if (name == 't_minute') {
        number = 4;
    } else if (name == 'memo') {
        number = 5;
    } else if (name == 'Date') {
        number = 6;
    }
    if(number == -1) {
        const db = new sqlite3.Database('Schedule.sqlite');
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS DayScheduledata (id TEXT, Title TEXT, f_hour INTEGER, f_minute INTEGER, t_hour INTEGER, t_minute INTEGER, memo TEXT, Date TEXT)');
            const stmt = db.prepare('INSERT INTO DayScheduledata VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
            stmt.run([id, DayScheduledata[0], DayScheduledata[1], DayScheduledata[2], DayScheduledata[3], DayScheduledata[4], DayScheduledata[5], DayScheduledata[6]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE DayScheduledata SET ' + name + ' = ? WHERE id = ? and Date = ?', err => {
                if (err) {
                    throw err;
                }
                stmt.run(DayScheduledata[number], id, DayScheduledata[6]);
                stmt.finalize();
            });
        });
        db.close();
    }
    return true;
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