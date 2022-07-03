import sqlite3 from "sqlite3";

/*****************************************************************
***function name     :AskWages
***Designer          :吹谷　優太
***Date              :
***function          :給料情報を参照する
 *******************************************************************/
export async function AskWages(id, DataName){
    var result = await CheckID(id);                                      //ユーザIDと一致するレコードがあるかを確認
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C9収支管理部/salary.db');
        var Shiftdata = "";                                              //参照結果をreturnするための変数
        if (result == "none"){                                           //レコードがなかった場合に新しいレコードを挿入
            db.serialize(() => {
                db.run("INSERT OR REPLACE INTO usersalary VALUES($id, 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing')", {$id: id});
                resolve("none");
            })
        } 
        db.serialize(() => {                                             //給料・収支情報参照
            db.each('SELECT * FROM usersalary WHERE id=$id', {$id: id}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (DataName == "HourWages"){                     //時給
                    Shiftdata = row.HourWages;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "TrasCosts"){                     //交通費
                    Shiftdata = row.TrasCosts;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "NightWages"){                    //深夜給
                    Shiftdata = row.NightWages;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "NightWagesRange"){               //深夜給になる時間帯
                    Shiftdata = row.NightWagesRange;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "Overtime"){                      //残業代
                    Shiftdata = row.Overtime;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "income"){                        //収入
                    Shiftdata = row.income;
                    db.close();
                    resolve(Shiftdata);
                } else if (DataName == "expense"){                       //支出
                    Shiftdata = row.expense;
                    db.close();
                    resolve(Shiftdata);
                } 
            });
        });
    })
}

/*****************************************************************
***function name     :UpdateWages
***Designer          :吹谷　優太
***Date              :
***function          :給料情報を更新する
 *******************************************************************/
export async function UpdateWages(id, DataName, Data){
    async function check2(){
        return new Promise((resolve) => {
            var result = "false";
            const db = new sqlite3.Database('./C9収支管理部/salary.db');
            db.serialize(() => {                                            //給料・収支情報更新
                const stmt = db.prepare('UPDATE usersalary SET ' + DataName + ' = ? WHERE id = ?', err => {
                    if (err) {
                        throw err;
                    }
                    stmt.run(Data, id);
                    stmt.finalize();
                    result = "success";
                    resolve(result);
                });
            });
            db.close();
        })
    }
    const result = await check2();
    return result;                                        //success or false
}

/*****************************************************************
***function name     :CheckID
***Designer          :吹谷　優太
***Date              :
***function          :ユーザIDと一致するレコードがあるか確認する
 *******************************************************************/
async function CheckID(id){
    async function check2(){
      return new Promise((resolve) => {
        var exists;
        var db = new sqlite3.Database("./C9収支管理部/salary.db");
        db.serialize(() => {
          db.get("SELECT count(*) FROM usersalary WHERE id=$id", { $id: id}, (err, res) => {
            if (0 < res["count(*)"]) {
              exists = "already";                          //既にに存在する
              resolve(exists);
            } else {
              exists = "none";                             //存在しない
              resolve(exists);
            }
          });
        })
        db.close();
      })
    }
    
    const result = await check2();
    return result;                                          //already or none
  }