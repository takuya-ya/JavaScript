'use script';

{
  const friends = ["Aki", "Hiro", "Yuna"];
  console.log(friends[1]);

  const scores = [85, 70, 55, 90];

  // for (let i = 0; i < scores.length; i++)もあり
  for (score of scores) {
    if (score >= 80) {
      console.log('優秀');
    } else if (score >= 60) {
      console.log('合格');
    } else {
      console.log('再試');
    }
  }

  let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  for (let num of month)
    switch (num) {
      case ():
        console.log('冬');
        break;
      case 1:
        console.log('冬');
        break;
      case 2:
        console.log('冬');
        break;
      case 3:
        console.log('春');
        break;
      case 4:
        console.log('春');
        break;
      case 5:
        console.log('春');
        break;
      case 6:
        console.log('夏');
        break;
      case 7:
        console.log('夏');
        break;
      case 8:
        console.log('夏');
        break;
      case 9:
        console.log('秋');
        break;
      case 10:
        console.log('秋');
        break;
      case 11:
        console.log('秋');
        break;
    }
// 下記のように式のtrueと条件式内のboolを照合している方がスマート
  //     switch (true) {
  //   case (num === 12 || num === 1 || num === 2):
  //     console.log(`${num}月は冬`);
  //     break;
  //   case (num >= 3 && num <= 5):
  //     console.log(`${num}月は春`);
  //     break;
  //   case (num >= 6 && num <= 8):
  //     console.log(`${num}月は夏`);
  //     break;
  //   case (num >= 9 && num <= 11):
  //     console.log(`${num}月は秋`);
  //     break;
  // }

    let i = 0;
    let sum = 0;
    while( i < 100) {
      i++;
      if ( i % 3 === 0) {
        console.log(i);
        sum += i;
        continue
      };
    }
  }