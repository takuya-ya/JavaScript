const result=document.querySelector('.result');

// おみくじ関数
const omikuji=()=>{
    const score=(Math.floor(Math.random()*6));
    if(score === 1){
        result.textContent='大吉';
        result.style.color = 'yellow';
    } else if (score === 2){
        result.textContent='中吉';
        result.style.color = 'black';
    } else if (score === 3){
        result.textContent='末吉';
        result.style.color = 'black';
    } else if (score === 4){
        result.textContent='凶';
        result.style.color = 'black';
    } else if (score === 5){
        result.textContent='大凶';
        result.style.color = 'red';
    } else {
        result.textContent='小吉';
        result.style.color = 'black';
    }
}

const btn = document.querySelector('.omikuji-img');
const shake = () => {
    btn.classList.add('shake');
}

btn.addEventListener('click', shake);
btn.addEventListener('animationend', () => {
    btn.classList.remove('shake');
    omikuji();
});



