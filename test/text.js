element.classList.add("クラス名");      // クラスを追加
element.classList.remove("クラス名");   // クラスを削除
element.classList.toggle("クラス名");   // 有無を切り替え
element.classList.contains("クラス名"); // 含まれているかを判定（true/false）
element.classList.replace("古い", "新しい"); // クラス名の置換

Math.random()      // 0以上1未満のランダムな小数
Math.floor(x)      // 小数点以下を切り捨て（例：Math.floor(2.9) → 2）
Math.ceil(x)       // 小数点以下を切り上げ（例：Math.ceil(2.1) → 3）
Math.round(x)      // 四捨五入（例：Math.round(2.5) → 3）
Math.max(a, b, …)  // 最大値
Math.min(a, b, …)  // 最小値
Math.abs(x)        // 絶対値
Math.sqrt(x)       // 平方根（√）
Math.pow(x, y)     // 累乗（xのy乗）

let now = new Date();               // 現在の日時
let date = new Date('2024-01-01'); // 特定の日付
date.getFullYear();  // 年（例: 2024）
date.getMonth();     // 月（0〜11、1月なら0）
date.getDate();      // 日（1〜31）
date.getDay();       // 曜日（0〜6、日曜が0）
date.getHours();     // 時（0〜23）
date.getMinutes();   // 分（0〜59）
date.getSeconds();   // 秒（0〜59）
date.getMilliseconds(); // ミリ秒
date.setFullYear(2025);
date.setMonth(11);      // 12月（0始まりなので11）
date.setDate(25);       // 25日
date.setHours(10);      // 10時
date.getTime();       // 1970年1月1日からのミリ秒
Date.now();           // 現在のタイムスタンプ（ミリ秒）
date.toISOString();   // ISO形式の文字列に変換
date.toLocaleString(); // ローカル形式の文字列
