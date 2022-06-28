import sqlite3 from "sqlite3";

async function ReturnShiftInformation(id, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('Schedule.sqlite');
        var Shiftdata = [];
        db.serialize(() => {
            db.each('SELECT id, JobName, WeekShift, MonthShift FROM Shiftdata WHERE id=$id', {$id: id}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (name == 'JobName') {
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

async function UpdateShiftInformation(id, name, Shiftdata){
    var number = -1;
    if(name == 'JobName') {
        number = 0;
    } else if(name == 'WeekShift') {
        number = 1;
    } else if (name == 'MonthShift') {
        number = 2;
    }
    if(number == -1) {
        const db = new sqlite3.Database('Schedule.sqlite');
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS Shiftdata (id TEXT, JobName TEXT, WeekShift TEXT, MonthShift TEXT)');
            const stmt = db.prepare('INSERT INTO Shiftdata VALUES (?, ?, ?, ?)');
            stmt.run([id, Shiftdata[0], Shiftdata[1], Shiftdata[2]]);
            stmt.finalize();
        });
        db.close();
    } else {
        const db = new sqlite3.Database('Schedule.sqlite');
        db.serialize(() => {
            const stmt = db.prepare('UPDATE Shiftdata SET ' + name + ' = ? WHERE id = ?', err => {
                if (err) {
                    throw err;
                }
                stmt.run(Shiftdata[number], id);
                stmt.finalize();
            });
        });
        db.close();
    }
    return true;
}

async function test() {
    var Shiftdata = new Array('塾', '11:11,22:22', '11:11,22:22,12:12,21:21');
    var id = 'al20114';
    var name1 = 'WeekShift1';
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

test();