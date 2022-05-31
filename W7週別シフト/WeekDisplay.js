const weeks = ['日','月','火','水','木','金','土'];

let dayCount = 1;   //日にちのカウント
let calenderHtml = '';  // HTMLを組み立てる変数

//冒頭の年月を表示
calenderHtml += '<table>';

//曜日の行を作成
for (let i =0; i < weeks.length; i++){
  calenderHtml += '<td>' + weeks[i] + '</td>';
}

for (let w = 0; w < 1; w++) {
  calenderHtml += '<tr>';
  
  for (let d = 0; d < 7; d++) {
      calenderHtml += '<td>' + "時間" + '</td>'
  }

  calenderHtml += '</tr>';  
}
calenderHtml += '</table>';

// HTMLに上記のコードを挿入
document.querySelector('#calendar').innerHTML = calenderHtml;

