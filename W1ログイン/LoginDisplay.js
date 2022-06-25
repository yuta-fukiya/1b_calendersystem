const trueID="aaa";
const truePassword="123";
LoginID_value=null;
Password_value=null;
function IDSet(){
    LoginID_value = document.getElementById("LoginText").value;
}
function PasswordSet(){
    Password_value = document.getElementById("PasswordText").value;
}
function Certification(){
    if(LoginID_value==trueID && Password_value==truePassword){
        window.location.href = '../W2メイン/MainDisplay.html';
    }else if(LoginID_value==null || Password_value==null){
        alert("入力されていない欄があります．");
    }else{
        alert("ログインIDまたはパスワードが違います．");
    }
}
