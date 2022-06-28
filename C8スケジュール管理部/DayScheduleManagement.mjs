import sqlite3 from "sqlite3";

async function ReturnDayScheduleInformation(id, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('Schedule.sqlite');
        var DayScheduledata = [];
        db.serialize(() => {
            db.each('SELECT id, Title, f_hour, f_minute, t_hour, t_minute, memo, Date FROM DayScheduledata WHERE id=$id and Date=$Date', {$id: id, $Data: DayScheduledata[6]}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (name == 'Title') {
                    Timetabledata.push(row.Title);
                    resolve(Timetabledata);
                } else if (name == 'f_hour') {
                    Timetabledata.push(row.f_hour);
                    resolve(Timetabledata);
                } else if (name == 'f_minute') {
                    Timetabledata.push(row.f_minute);
                    resolve(Timetabledata);
                } else if (name == 't_hour') {
                    Timetabledata.push(row.t_hour);
                    resolve(Timetabledata);
                } else if (name == 't_minute') {
                    Timetabledata.push(row.t_minute);
                    resolve(Timetabledata);
                } else if (name == 'memo') {
                    Timetabledata.push(row.memo);
                    resolve(Timetabledata);
                } else if (name == 'Date') {
                    Timetabledata.push(row.Date);
                    resolve(Timetabledata);
                } else {
                    Timetabledata.push(row.Title);
                    Timetabledata.push(row.f_hour);
                    Timetabledata.push(row.f_minute);
                    Timetabledata.push(row.t_hour);
                    Timetabledata.push(row.t_minute);
                    Timetabledata.push(row.memo);
                    Timetabledata.push(row.Date);
                    resolve(Timetabledata);
                }
            });
        });
        db.close();
    })
}

async function UpdateDayScheduleInformation(id, name, DayScheduledata){
    var number = -1;
    if(name == title) {
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
            stmt.run([id, DayScheduledata[0], DayScheduledata[1], DayScheduledata[3], DayScheduledata[4], DayScheduledata[5], DayScheduledata[6]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE DayScheduledata SET ' + name + ' = ? WHERE id=$id and Date=$Date', {$id: id, $Data: DayScheduledata[6]}, err => {
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