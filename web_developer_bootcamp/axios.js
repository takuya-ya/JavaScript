// import axios from 'axios'; // CDNなら不要

// const getDadJoke = async ()=> {
//   try {
//     const config = {
//       headers: {
//         Accept: 'application/json' //この設定はこのサイトの仕様
//       }
//     };
//     const response = await axios.get('https://icanhazdadagagadjoke.com/', config);
//     return response.data.joke;
//   } catch (error) {
//     return 'No Jokes! Sorry!!';
//   }

//   //axiosで.json（）での変換不要
// };

// const addNewJoke = async () => {
//   const jokes = document.querySelector('#jokes');
//   const jokeText = await getDadJoke();
//   const newLi = document.createElement('li');
//   newLi.append(jokeText); //appendはテキストを追加する
//   jokes.append(newLi);
// };

// const button = document.querySelector('#btn');
// button.addEventListener('click', addNewJoke);

const  getDadJoke = async () => {

  try {
    const config = {
      headers: {
         Accept: 'application/json' ,
      }
    };
    const jokePromise = await axios.get('https://icanhazdadjoke.com/', config);
    return jokePromise.data.joke;// これが無いとpromiseだけ帰ってくる
  } catch (error) {
    return 'No Joke';
  }
};

const addNewJoke = async () => {

  const joke = await getDadJoke(); //awaitがないと即座にpromiseが入り、resloveもされないのでjokeの文章が
  console.log(joke);

  const newLi = document.createElement('li');
  const ul = document.querySelector('#jokes');
  newLi.append(joke);
  ul.append(newLi);


};

document.addEventListener('click', addNewJoke);
