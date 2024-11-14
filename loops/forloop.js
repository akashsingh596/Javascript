/// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   }else{
  //     console.log(element);
  //   }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop ${j} and inner value ${i}`);
    // console.log(i+'*'+ j + '='+ i*j);
    // console.log(`${i}*${j}=${i * j}`);
  }
}
let myArray = ["flash", "batman", "superMan"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

/// loop using break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    break;
  }
  console.log(`value of ${i}`);
}
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    continue;
  }
  console.log(`value of ${i}`);
}
