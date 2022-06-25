import sqlite3 from "sqlite3";

export async function regist(userid, userpass){
  var result = await check(userid, userpass);
  if (result == "false"){
    var db = new sqlite3.Database("./login/idpass.db");
    await db.run("INSERT OR REPLACE INTO user VALUES($id, $pass)", {$id: userid, $pass: userpass});
    db.close();
    result = "success";
  } else {
    result = "already";
  }
  return result;
}

export async function check(userid, userpass){
  async function check2(){
    return new Promise((resolve) => {
      var exists;
      var db = new sqlite3.Database("./login/idpass.db");
      db.serialize(() => {
        db.get("SELECT count(*) FROM user WHERE id=$id and pass=$pass", { $id: userid, $pass: userpass }, (err, res) => {
          if (0 < res["count(*)"]) {
            exists = "success";
            resolve(exists);
          } else {
            exists = "false";
            resolve(exists);
          }
        });
      })
      db.close();
    })
  }
  
  const result = await check2();
  console.log(result);
  return result;
}