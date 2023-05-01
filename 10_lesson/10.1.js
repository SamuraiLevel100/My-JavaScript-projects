console.log("Task_1");

function getPromise(message,delay){
    return new Promise((resolve, reject) => {
        if (message == null || message.trim() === '' || delay == null || delay === '')
            reject("Error! Fill in all fields"); // error
        else {
            setTimeout(() => {
                resolve(message); // success
            }, delay);
        }
    });
}

getPromise("test promise")
.then(function(data) {
  console.log(data);// не буде викликано
})
.catch(function(data){
  console.log(data);//буде виведено Error! Fill in all fields
});

getPromise("test promise", 2000)
  .then(function(data) {
    console.log(data);//виводить => test promise через 2 секунди після запуску
  })
  .catch(function(data){
    console.log(data);// не буде викликано
  });

