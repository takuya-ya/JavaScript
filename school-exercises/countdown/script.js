
const countdown =(due)=>{
    const now = new Date();
    //getTime -> 1970/1/1からの時間をミリ秒で取得
  
    //適当な桁の数字を下記の通りに計算すると理解しやすい
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) %60;
    const hours = Math.floor(rest /1000/60/60)%24;
    const days = Math.floor(rest/1000/60/60/24);
    const count = [days,hours,min,sec];
  
    return count;
  }
  
  const goal = new Date(2026,6,11);
  
  //padStart(そろえる文字数,埋める文字)
  
  const recalc=()=>{
    const counter = countdown(goal);
    document.querySelector('#day').textContent = counter[0];
    document.querySelector('#hour').textContent = counter[1];
    document.querySelector('#min').textContent = String(counter[2]).padStart(2,'0');
    document.querySelector('#sec').textContent = String(counter[3]).padStart(2,'0');
    refresh();
  }
  
  const refresh=()=>{
    setTimeout(recalc,1000);
  }
  //setTimeout(実行する関数,待ち時間（ミリ秒）)
  
  
  recalc();