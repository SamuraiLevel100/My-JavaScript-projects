console.log("Task_2");
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          product *= arr[i];
        } else {
          reject("Error! Incorrect array!");
          return;
        }
      }
      resolve(product);
    });
  }
  
  calcArrProduct([42, 69, 228, 13, 26])
    .then(function(data) {
      console.log(data); // виводить 120
    })
    .catch(function(data) {
      console.log(data); // не буде викликано
    });
  