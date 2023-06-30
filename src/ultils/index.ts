export {};
// generic type
const myFn = <T, U>(input1: T, input2: U) => {
  // if input is number => return input + 1;
  // if input is string => return "hello" + input;
  // if input is boolean => return "boolean"
};

myFn<boolean, string>(true, "19");

// callback function: function
function innerFunction(powder: any) {
  // lam banh my
  console.log("hello from inside");
}

function callback2(powder: any) {
  // lam banh ran
}

function callback3(powder: any) {
  // mang cho ca an
}

function outerFunction(cb: any) {
  console.log("hello from out side");
  const ricePowder = "rice powder"
  cb(ricePowder);
}

outerFunction(innerFunction);
outerFunction(callback2);
outerFunction(callback3);
