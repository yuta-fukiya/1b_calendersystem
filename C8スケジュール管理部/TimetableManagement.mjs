import sqlite3 from "sqlite3";

export async function ReturnTimetableInformation(id, wday, period, name){
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
        var Timetabledata = [];
        db.serialize(() => {
            db.each('SELECT count(*), id, Class_name, Class_room, Unit_num, Teacher_name, wday, period FROM Timetabledata WHERE id=$id and wday=$wday and period=$period', {$id: id, $wday: wday, $period: period}, function(err, row) {
                if (err) {
                    reject(err);
                } 
                if (row['count(*)']==0 && wday!="" &&period!=""){
                    TimeInsert(id, wday, period);
                }
                if (name == 'Class_name') {
                    Timetabledata.push(row.Class_name);
                    resolve(Timetabledata);
                } else if (name == 'Class_room') {
                    Timetabledata.push(row.Class_num);
                    resolve(Timetabledata);
                } else if (name == 'Unit_num') {
                    Timetabledata.push(row.Unit_num);
                    resolve(Timetabledata);
                } else if (name == 'Teacher_name') {
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

export async function UpdateTimetableInformation(id, wday, period, name, Timetabledata){
    var number = -1;
    if(name == 'Class_name') {
        number = 0;
    } else if(name == 'Class_room') {
        number = 1;
    } else if (name == 'Unit_num') {
        number = 2;
    } else if (name == 'Teacher_name') {
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
async function TimeInsert(id, wday, period) {
    const db = new sqlite3.Database('./C8スケジュール管理部/Schedule.sqlite');
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO Timetabledata VALUES (?, ?, ?, ?, ?, ?, ?)');
        stmt.run(id, wday, period);
        stmt.finalize();
    });
    db.close();
}


//-----------------------------------------------------------------------------------------------
async function test() {
    var Timetabledata = new Array('プログラミング', 16, 2, '山田', 2, 3);
    var id = 'al20116';
    var name1 = '';
    var name2 = 'Teacher_name';
    var wday = 2;
    var period = 3;
    var Judge;
    Judge = await UpdateTimetableInformation(id, name1, Timetabledata);
    if (Judge == true) {
        console.log('true');
    } else {
        console.log('false');
    }
    var c = [];
    c = await ReturnTimetableInformation(id, wday, period, name2);
    console.log(c);
}

//test();