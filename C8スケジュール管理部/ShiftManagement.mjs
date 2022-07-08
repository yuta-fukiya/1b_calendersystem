import sqlite3 from "sqlite3";

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
                if (name == 'JobName') {
                    Shiftdata.push(row.JobName);
                    resolve(Shiftdata);
                } else if (name == 'WeekShift') {
                    Shiftdata.push(row.WeekShift);
                    resolve(Shiftdata);
                } else if (name == 'MonthShift') {
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

export async function UpdateShiftInformation(id, year, month, name, Shiftdata){
    var number = -1;
    if(name == 'JobName') {
        number = 0;
    } else if(name == 'WeekShift') {
        number = 1;
    } else if (name == 'MonthShift') {
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

async function ShiftInsert(id, year, month) {
    const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO Shiftdata VALUES (?, ?, ?, ?, ?, ?)');
        stmt.run(id, year, month);
        stmt.finalize();
    });
    db.close();
}

//------------------------------------------------------------------------------------------
async function test() {
    var Shiftdata = new Array('塾', '11:11,22:22', '11:11,22:22,12:12,21:21');
    var id = 'al20116';
    var name1 = '';
    var name2 = 'WeekShift';
    var Judge;
    Judge = await UpdateShiftInformation(id, name1, Shiftdata);
    if (Judge == true) {
        console.log('true');
    } else {
        console.log('false');
    }
    var c = [];
    c = await ReturnShiftInformation(id, name2);
    console.log(c);
}

//test();