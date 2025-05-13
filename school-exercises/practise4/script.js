'use script';

{
    const user = {
      name:"Mika",
      age:28,
      job:"Designer",
    }

    console.log(`名前:${user.name} 年齢:${user.age}`);

    const fruits = ["apple", "banana", "orange"];

    fruits.forEach(fruit => {
      console.log(fruit);
      
    });

    const str = "tiger";

    for(let string of str) {
      console.log(string);
    }

    let age = 22;

    age >= 20 ? console.log('飲酒可') : age >= 18 ? console.log('成人(飲酒不可)') : console.log('未成年');  

    const users = [
      { name: "Taro", age: 21 },
      { name: "Hanako", age: 17 },
      { name: "Ken", age: 19 }
    ];

    users.forEach(user => {
      if (user.age >= 20) {
        console.log(`${user.name}は成人です`);
      } else {
        console.log(`${user.name}は未成年です`);
      }
      
      user.age >= 20 ? console.log(`${user.name}は成人です`) : console.log(`${user.name}は未成年です`);
    })




 }