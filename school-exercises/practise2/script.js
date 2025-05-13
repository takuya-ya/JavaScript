'use script';

{
    const fizzbuzz = (i) => {
    if (i % 3 === 0 && i % 5 ===0) {
      return 'fizzbuzz';
    } else if (i % 3 === 0 ) {
      return 'fizz';
    } else if (i % 5 === 0 ) {
      return 'buzz';
    }
    return i;
  }
  
  let i = 0;

  while (i < 30){
    i++;
    console.log(
      fizzbuzz(i)
    )
  }
}