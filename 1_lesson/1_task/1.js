
const yearBirth = prompt("У якому році ви народились?")

const todayYear = new Date().getFullYear();
const age=todayYear-yearBirth;

alert(`Вам ${age} років!`);