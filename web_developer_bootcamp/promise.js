function fakeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 500;
    setTimeout(() => {
      const success = Math.random() < 0.7;
      if (success) {
        resolve(`成功！データ取得: ${url}`);
      } else {
        reject(`エラー！取得できませんでした: ${url}`);
      }
    }, delay);
  });
}

fakeRequestPromise('api/user')
  .then((resource1) => {
    console.log('1:', resource1);
    return fakeRequestPromise('api/page2');
  })
  .then((resource2) => {
    console.log('2:', resource2);
    return fakeRequestPromise('api/page3');
  })
  .then((resource3) => {
    console.log('3:', resource3);
  })
  .catch((error) => {
    console.log('失敗:', error);
  });


