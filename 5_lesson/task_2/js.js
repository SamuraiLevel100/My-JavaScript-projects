// Попросимо користувача ввести інформацію про автомобіль
var car = {
	manufacturer:"Toyota",
	model:"Supra",
	year: 1997,
	avgSpeed:200,

	// Метод для відображення інформації про автомобіль в консолі
	display: function() {
		document.write(`Manufacturer: ${this.manufacturer} <br> 
                        Model: ${this.model} <br> 
                        Year: ${this.year} <br> 
                        AverageSpeed: ${this.avgSpeed}<br>`);
	},

	// Метод для розрахунку часу, необхідного для подолання заданої відстані з середньою швидкістю
	calculateTravelTime: function(distance) {
		var time = distance / this.avgSpeed;
		var restTime = Math.floor(time / 4);
		var totalHours = time + restTime;
		var hours = Math.floor(totalHours);
		var minutes = Math.floor((totalHours - hours) * 60);
		return hours + ' hours and ' + minutes + ' minutes';
	}
};

// Викликаємо метод для відображення інформації про автомобіль в консолі
car.display();

// Попросимо користувача ввести відстань, яку потрібно подолати
// var distance = parseInt(prompt("Enter distance in kilometers:"));
// console.log('Distance: ' + distance + ' km');
// Розраховуємо час, необхідний для подолання відстані, і виводимо його в консоль
function calculate() {
	var distanceInput = document.getElementById("distance");
	var resultElement = document.getElementById("result");
	var distance = parseInt(distanceInput.value);
	if (distance && distance > 0) {
		var travelTime = car.calculateTravelTime(distance);
		resultElement.innerHTML = "Travel Time: " + travelTime;
	} 
	else {
		resultElement.innerHTML = "Please enter a valid distance";
	}
}
