const cars = [];

const tableBody = document.querySelector('#car-table tbody');

function addCarToTable(car) {
    if (car.id && car.model && car.year && car.price && car.color && car.customscStatus=='yes' || car.customscStatus=='no'||car.customscStatus=='Yes' || car.customscStatus=='No' ) {
      tableBody.innerHTML += `<tr>
        <th scope="row">${car.id}</th>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>${car.price}$</td>
        <td>${car.color}</td>
        <td>${car.customscStatus}</td>
      </tr>`;
    } else {
      console.error('One or more properties of the car object are missing.');
    }
  }
  

  

function readCar() {
    const inputModel = document.getElementById('modelInput');
    const inputYear = document.getElementById('yearInput');
    const inputPrice = document.getElementById('priceInput');
    const inputColor = document.getElementById('colorInput');
    const inputCustomscStatus = document.getElementById('customscStatusInput');
    


    return {
        id:cars.length + 1,
        model: inputModel.value,
        year: inputYear.value,
        price: inputPrice.value,
        color: inputColor.value,
        customscStatus: inputCustomscStatus.value,
        
    };
}
const addToCatalog=document.getElementById('add-car-btn');
const clear_all_catalog=document.getElementById('clear-all-car');

addToCatalog.onclick = (event) =>{

    event.preventDefault();
    
    console.log('Add');

    const newCar=readCar();

    cars.push(newCar);
    addCarToTable(newCar);
    

}

clear_all_catalog.onclick = () => {
    tableBody.innerHTML = '';
    cars.splice(0);
    console.log('Clear');
}
const searchBtn = document.getElementById('search-carr-btn');

searchBtn.onclick = (event) => {
  event.preventDefault();
  
  const searchValue = document.getElementById('searchCar').value;
  const filteredCars = cars.filter(car => car.model === searchValue);
  
  tableBody.innerHTML = '';
  
  filteredCars.forEach(car => addCarToTable(car));
}

