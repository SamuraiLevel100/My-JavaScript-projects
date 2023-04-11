// Попросимо користувача ввести інформацію про автомобіль
var car = {
	manufacturer: prompt("Enter manufacturer:"),
	model: prompt("Enter model:"),
	year: parseInt(prompt("Enter year:")),
	avgSpeed: parseInt(prompt("Enter average speed (km/h):")),

	// Метод для відображення інформації про автомобіль в консолі
	display: function() {
		console.log("Car Information:");
		console.log("Manufacturer:", this.manufacturer);
		console.log("Model:", this.model);
		console.log("Year:", this.year);
		console.log("Average Speed:", this.avgSpeed + " km/h");
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
var distance = parseInt(prompt("Enter distance in kilometers:"));
console.log('Distance: ' + distance + ' km');
// Розраховуємо час, необхідний для подолання відстані, і виводимо його в консоль
if (distance && distance > 0) {
	var travelTime = car.calculateTravelTime(distance);
	console.log("Travel Time:", travelTime);
} else {
	console.log("Please enter a valid distance");
}
