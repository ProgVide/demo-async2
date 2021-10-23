////   Promise
console.log("Before Prepare Food.");
function prepareFood(data) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (data !== 2) {
        console.log("Prepare Food.");
        resolve("Food is ready.");
      } else {
        reject("Value not acceptable.");
      }
    }, 10);
  });
  return promise;
}
// --------------------------- Other Function
function prepareFrenchToast() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Prepare French Toast.");
      resolve("Freanch Toast is ready.");
    }, 20);
  });
  return promise;
}

//////////////////////////////////
function prepareCoffee() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Prepare Coffee.");
      resolve("Freanch Toast is Coffee.");
    }, 20);
  });
  return promise;
}

async function startProcess() {
  try {
    let foodValue = await prepareFood();
    console.log("Food", foodValue);
    let frenchToastValue = await prepareFrenchToast();
    console.log("Toast", frenchToastValue);
    let coffeeValue = await prepareCoffee();
    console.log("Coffee", coffeeValue);
  } catch (error) {
    console.log("Error in catch = ", error);
  }
}
startProcess();
/*
let promise = prepareFood();
//console.log("Promise = ", promise);
promise
  .then(function (value) {
    console.log("Food is ready Call Back = ", value);
    return prepareFrenchToast();
  })
  .then(function (FrenchToastValue) {
    console.log("French Toast is ready Call Back = ", FrenchToastValue);
    return prepareCoffee();
  })
  .then(function (coffeeValue) {
    console.log("Coffee is ready Call Back = ", coffeeValue);
  })
  .catch(function (error) {
    console.log("Error = ", error);
  });

// prepareFood((value) => {
//   console.log("Food is ready Call Back = ", value);
//   prepareFrenchToast((value) => {
//     console.log("French Toast is ready Call Back = ", value);
//     prepareCoffee((value) => {
//       console.log("Coffee is ready Call Back = ", value);
//     });
//   });
// });
*/
console.log("After Prepare Food, dinner is ready.");
