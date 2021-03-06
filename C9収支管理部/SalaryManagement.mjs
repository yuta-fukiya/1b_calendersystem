/*******************************************************************
***  File Name    : SalaryManagement.mjs
***  Version      : V1.5
***  Designer     : 吹谷優太
***  Date         : 2022.7.11
***  Purpose      : ID,パスワードを登録・参照する
*******************************************************************/

import sqlite3 from "sqlite3";

/*****************************************************************
***function name     : AskWages
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 給料情報を参照する
***Return:           : 参照結果
 *******************************************************************/
export async function AskWages(id, year, month, DataName){
    var result = await CheckID(id, year, month);                                      //ユーザIDと一致するレコードがあるかを確認
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./C9収支管理部/salary.db');
        var Shiftdata = "";                                            //参照結果をreturnするための変数
        if (result == "none"){                                           //レコードがなかった場合に新しいレコードを挿入
            db.serialize(() => {
                db.run("INSERT OR REPLACE INTO usersalary VALUES($id, $year, $month, '0', '0', '0', '00:00 00:00', '0', '0', '0')", {$id: id, $year: year, $month: month });
                resolve("0");
            })
        } 
        db.serialize(() => {                                             //給料・収支情報参照
            db.each('SELECT * FROM usersalary WHERE id=$id and year=$year and month=$month', {$id: id, $year: year, $month: month}, function(err, row) {
                if (err) {
                    reject(err);
                } else if (DataName == "HourWages"){                     //時給
                    Shiftdata = row.HourWages;
                    resolve(Shiftdata);
                } else if (DataName == "TrasCosts"){                     //交通費
                    Shiftdata = row.TrasCosts;
                    resolve(Shiftdata);
                } else if (DataName == "NightWages"){                    //深夜給
                    Shiftdata = row.NightWages;
                    resolve(Shiftdata);
                } else if (DataName == "NightWagesRange"){               //深夜給になる時間帯
                    Shiftdata = row.NightWagesRange;
                    resolve(Shiftdata);
                } else if (DataName == "Overtime"){                      //残業代
                    Shiftdata = row.Overtime;
                    resolve(Shiftdata);
                } else if (DataName == "income"){                        //収入
                    Shiftdata = row.income;
                    resolve(Shiftdata);
                } else if (DataName == "expense"){                       //支出
                    Shiftdata = row.expense;
                    resolve(Shiftdata);
                } 
            });
            db.close();
        });
    })
}

/*****************************************************************
***function name     : UpdateWages
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 給料情報を更新する
***Return            : 更新結果
 *******************************************************************/
export async function UpdateWages(id, year, month, DataName, Data){
    async function check2(){
        return new Promise((resolve) => {
            var result = "false";
            const db = new sqlite3.Database('./C9収支管理部/salary.db');
            db.serialize(() => {                                            //給料・収支情報更新
                const stmt = db.prepare('UPDATE usersalary SET ' + DataName + ' = ? WHERE id = ? and year = ? and month = ?', err => {
                    if (err) {
                        throw err;
                    }
                    stmt.run(Data, id, year, month);
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
***function name     : CheckID
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : ユーザIDと一致するレコードがあるか確認する
***Return            : 確認結果
 *******************************************************************/
async function CheckID(id, year, month){
    async function check2(){
      return new Promise((resolve) => {
        var exists;
        var db = new sqlite3.Database("./C9収支管理部/salary.db");
        db.serialize(() => {
          db.get("SELECT count(*) FROM usersalary WHERE id=$id and year=$year and $month=month", { $id: id, $year: year, $month: month}, (err, res) => {
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