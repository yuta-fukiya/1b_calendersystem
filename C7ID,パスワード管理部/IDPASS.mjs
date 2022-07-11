/*******************************************************************
***  File Name    : IDPASS.mjs
***  Version      : V1.1
***  Designer     : 吹谷優太
***  Date         : 2022.5.31
***  Purpose      : ID,パスワードを登録・参照する
*******************************************************************/
import sqlite3 from "sqlite3";

/*****************************************************************
***function name     : RegistUser
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 新規ユーザ情報を登録する
***return            : 登録結果
 *******************************************************************/
export async function RegistUser(userid, userpass){
  var result = await CheckID(userid);                       //データベースに入力したIDが存在するか確認
  if (result == "none"){                                    //存在しなかったとき
    var db = new sqlite3.Database("./C7ID,パスワード管理部/idpass.db");
    db.run("INSERT OR REPLACE INTO user VALUES($id, $pass)", {$id: userid, $pass: userpass});
    db.close();
    result = "success";
  } else if (result == "already"){                          //存在したとき
    result = "already";
  } else {
    result = "false";                                       //エラー
  }
  return result;                                            //success or already or false
}

/*****************************************************************
***function name     : CheckUser
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : データベースに入力データがあるかを確かめる
***Return            : 参照結果
 *******************************************************************/
export async function CheckUser(userid, userpass){
  async function check2(){
    return new Promise((resolve) => {
      var exists;                                          //入力したIDパスワードが存在するかどうか
      var db = new sqlite3.Database("./C7ID,パスワード管理部/idpass.db");
      db.serialize(() => {
        db.get("SELECT count(*) FROM user WHERE id=$id and pass=$pass", { $id: userid, $pass: userpass }, (err, res) => {
          if (0 < res["count(*)"]) {                       //存在するとき
            exists = "success";
            resolve(exists);
          } else {                                         //存在しないとき
            exists = "false";
            resolve(exists);
          }
        });
      })
      db.close();
    })
  }
  
  const result = await check2();
  return result;                                           //success or false
}

/*****************************************************************
***function name     : CheckID
***Designer          : 吹谷　優太
***Date              : 2022.7.11
***function          : 入力したIDがデータベースに存在するかを確認する
***Return            : 確認結果
 *******************************************************************/
async function CheckID(userid){
  async function check2(){
    return new Promise((resolve) => {
      var exists;                                           //入力したIDが存在するかどうか
      var db = new sqlite3.Database("./C7ID,パスワード管理部/idpass.db");
      db.serialize(() => {
        db.get("SELECT count(*) FROM user WHERE id=$id", { $id: userid}, (err, res) => {
          if (0 < res["count(*)"]) {
            exists = "already";                              //存在する
            resolve(exists);
          } else {                                           //存在しない
            exists = "none";
            resolve(exists);
          }
        });
      })
      db.close();
    })
  }
  
  const result = await check2();
  return result;                                             //already or none
}