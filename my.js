// 1.	დაწერეთ შემდეგი სკრიპტი:
//  მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.

//  დაწერეთ if პირობა, თუ ცვლადის მნიშვნელობა ნაკლებია 50ზე დაუბეჭდოს -
//  ნაკლებია 50ზე, თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე,
//ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.

let x = 100;

if (x < 50) {
  console.log(`ნაკლებია 50ზე`);
} else if (x > 20) {
  console.log(`მეტია 20ზე`);
} else {
  console.log(`შეცდომა`);
}

// 2.	მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით
// დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false;

let name = `mariam`;

let resultName = name === "mariam" ? `true` : `false`;

console.log(resultName);

// 3.	მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. switch case ის
// საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს
// დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false;

let name1 = `მარიამ`;

switch (name1) {
  case `მარიამ`:
    console.log(true);

    break;
  default:
    console.log(false);

    break;
}

// 1.	ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 11მდე

for (let index = 5; index < 11; index++) {
  console.log(index);
}

// 2.	მოცემულია მასივი:
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე
// და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) console.log(array1[i]);
}

let array2 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array2) {
  if (item > 0 && item < 10) console.log(item);
}

// 3.	მოცემულია მასივი:
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];

let sum = 0;

for (let x = 0; x < array3.length; x++) {
  let element = array3[x];
  sum = sum += element;
}

console.log(sum);

let array4 = [1, 2, 3, 4, 5];

let sum1 = 0;

for (let number of array4) {
  sum1 += number;
}
console.log(sum1);

// 4.	მოცემულია მასივი
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული
// (ჯამიგავყოთ ელემნტების რაოდენობაზე)

let array5 = [1, 2, 3, 4, 5];
let math = 0;
let length1 = array5.length;

for (let y = 0; y < array5.length; y++) {
  math += array5[y];
}
console.log(math / length1);

// 5.ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

//   ●	თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია
// დაიბეჭდოს ტექსტი:  hello user;
// ●	თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// ●	თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე
// დაიბეჭდოს ტექსტი: hello anna;
// ●	ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus === `active`) {
  console.log(`hello user`);
} else if (user2.name === `ლევანს`) {
  console.log(`hello levani`);
} else if (user2.studentstatus === `active` || user2.age < 25) {
  console.log(`hello anna`);
} else {
  console.log(`error`);
}

let user3 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

let userResulte =
  user2.age < 18 && user2.studentstatus === `active`
    ? `hello user`
    : user2.name === `ლევანს`
    ? `hello levani`
    : user2.studentstatus === `active` || user2.age < 25
    ? `hello anna`
    : `error`;
console.log(userResulte);

// 7.	მოცემულია მასივი:
// ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let m = 0; m < array6.length; m++) {
  if (array6[m] % 2 === 0) {
    console.log(array6[m]);
  }
}

for (let number2 of array6) {
  if (number2 % 2 === 0) {
    console.log(number2);
  }
}

// 8.კონსოლში გამოიტანეთ მარტო ის ობიექტი,
// რომლის status property-ის მნიშვნელობა არის true;

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let names of users) {
  if (names.status === true) {
    console.log(names);
  }
}

for (let p = 0; p < users.length; p++) {
  if (users[p].status === true) {
    console.log(users[p]);
  }
}
// 9.Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:

let array7 = [32, 14, null, `40`, 50];

for (let item2 of array7) {
  if (typeof item2 === `number` && item2 % 5 === 0) {
    console.log(item2);
  }
}

// 10.	Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let item3 of array8) {
  for (let item4 of item3) {
    if (item4 > 0) {
      console.log(item4);
    }
  }
}

for (let j = 0; j < array8.length; j++) {
  let nestedArray = array8[j];
  {
    for (k = 0; k < nestedArray.length; k++)
      if (nestedArray[k] > 0) {
        console.log(nestedArray[k]);
      }
  }
}
