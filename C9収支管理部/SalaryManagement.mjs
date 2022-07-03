import sqlite3 from "sqlite3";

export async function AskWages(id, DataName){
    var result = await CheckID(id);
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C9収支管理部/salary.db');
        var Shiftdata = "";
        if (result == "none"){
            db.serialize(() => {
                db.run("INSERT OR REPLACE INTO usersalary VALUES($id, 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing')", {$id: id});
                resolve("none");
            })
        } 
        db.serialize(() => {
            db.each('SELECT * FROM usersalary WHERE id=$id', {$id: id}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (DataName == "HourWages"){
                    Shiftdata = row.HourWages;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "TrasCosts"){
                    Shiftdata = row.TrasCosts;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "NightWages"){
                    Shiftdata = row.NightWages;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "NightWagesRange"){
                    Shiftdata = row.NightWagesRange;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "Overtime"){
                    Shiftdata = row.Overtime;
                    db.close();
                    resolve(Shiftdata);
                } 
            });
        });
    })
}

export async function UpdateWages(id, DataName, Data){
    async function check2(){
        return new Promise((resolve) => {
            const db = new sqlite3.Database('./C9収支管理部/salary.db');
            db.serialize(() => {
                const stmt = db.prepare('UPDATE usersalary SET ' + DataName + ' = ? WHERE id = ?', err => {
                    if (err) {
                        throw err;
                    }
                    stmt.run(Data, id);
                    stmt.finalize();
                    resolve("success");
                });
            });
            db.close();
        })
    }
    const result = await check2();
    return result;
}

async function CheckID(id){
    async function check2(){
      return new Promise((resolve) => {
        var exists;
        var db = new sqlite3.Database("./C9収支管理部/salary.db");
        db.serialize(() => {
          db.get("SELECT count(*) FROM usersalary WHERE id=$id", { $id: id}, (err, res) => {
            if (0 < res["count(*)"]) {
              exists = "already";
              resolve(exists);
            } else {
              exists = "none";
              resolve(exists);
            }
          });
        })
        db.close();
      })
    }
    
    const result = await check2();
    return result;
  }