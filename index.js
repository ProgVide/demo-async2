//// Async ------ Call Backs --- Call Back Hell -- Paramid --- Not easy to handle call Back error -- Dubugging issue
console.log("Before Prepare Food.");
function prepareFood(callBack) {
  setTimeout(() => {
    console.log("Prepare Food.");
    callBack("Food is ready.");
  }, 10);
}
function prepareFrenchToast(callBack) {
  setTimeout(() => {
    console.log("Prepare French Toast.");
    callBack("Freanch Toast is ready.");
  }, 20);
}
function prepareCoffee(callBack) {
  setTimeout(() => {
    console.log("Prepare Coffee.");
    callBack("Freanch Toast is Coffee.");
  }, 20);
}
prepareFood((value) => {
  console.log("Food is ready Call Back = ", value);
  prepareFrenchToast((value) => {
    console.log("French Toast is ready Call Back = ", value);
    prepareCoffee((value) => {
      console.log("Coffee is ready Call Back = ", value);
    });
  });
});

console.log("After Prepare Food, dinner is ready.");
