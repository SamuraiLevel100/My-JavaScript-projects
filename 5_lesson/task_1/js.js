// Створюємо об'єкт, який визначає час
var time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  
    // Метод для відображення часу в форматі hh:mm:ss
    display: function() {
      var hh = ('0' + this.hours).slice(-2);
      var mm = ('0' + this.minutes).slice(-2);
      var ss = ('0' + this.seconds).slice(-2);
      var timeString = hh + ':' + mm + ':' + ss;
      document.getElementById('clock').innerHTML = timeString;
    },
  
    // Метод для додавання однієї секунди до часу
    addSecond: function() {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours++;
          if (this.hours >= 24) {
            this.hours = 0;
          }
        }
      }
      this.display();
    },
  
    // Метод для віднімання однієї секунди від часу
    subtractSecond: function() {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
        if (this.minutes < 0) {
          this.minutes = 59;
          this.hours--;
          if (this.hours < 0) {
            this.hours = 23;
          }
        }
      }
      this.display();
    }
  };
  
  // Метод для відображення поточного часу на сторінці
  function showCurrentTime() {
    var currentDate = new Date();
    time.hours = currentDate.getHours();
    time.minutes = currentDate.getMinutes();
    time.seconds = currentDate.getSeconds();
    time.display();
  }
  
  // Викликаємо метод для відображення поточного часу на сторінці
  showCurrentTime();
  
  // Кожну секунду додаємо одну секунду до часу
  setInterval(function() {
    time.addSecond();
  }, 1000);
  