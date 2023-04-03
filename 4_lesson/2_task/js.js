//Task_1
console.log('Task_1');

let line = prompt("Enter string:");
console.log(line);
let counter=0;

for(let i=0;i<line.length;i++)
{
    if (line[i]===' ') {
        counter++;
    }
    
}
console.log(`Number of spaces: [${counter}]`);

//Task_2
console.log('Task_2');
function Thefirstletter(linee) {
    return linee.charAt(0).toUpperCase() + linee.slice(1);
}

let linee= prompt("Enter string:");
console.log(linee);
console.log(Thefirstletter(linee));

//Task_3
console.log('Task_3');
console.log(line);
let numb = line.length;
console.log(`The number of characters in a line: ${numb}`);

//Task_4
console.log('Task_4');
function checkAbbreviation(phrase, abbreviation) {
    const words = phrase.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(abbreviation)) {
        return true;
      }
    }
    return false;
  }
  
  const phrase = prompt("Enter phrase:");
  const abbreviation = prompt("Enter abbreviation:");
  console.log(phrase);
  if (checkAbbreviation(phrase, abbreviation)) {
    console.log(`The abbreviation ${abbreviation} is present in the phrase.`);
  } else {
    console.log(`The abbreviation ${abbreviation} is not present in the phrase.`);
  }

  //Task_5
console.log('Task_5');
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  const inputStr = prompt("Enter a string:");
  if (isPalindrome(inputStr)) {
    console.log("The string is a palindrome.");
  } else {
    console.log("The string is not a palindrome.");
  }


    //Task_6
console.log('Task_6');
  function analyzeUrl(url) {
    const urlPattern = /^(\w+):\/\/([\w.-]+)(\/[\w-.]*)*$/;
    const match = url.match(urlPattern);
  
    if (match) {
      const protocol = match[1];
      const domain = match[2];
      const path = match[3];
  
      console.log(`Protocol: ${protocol}`);
      console.log(`Domain: ${domain}`);
      console.log(`Path: ${path}`);
    } else {
      console.log(`Invalid URL: ${url}`);
    }
  }
  
  const url = prompt("Enter a URL:");
  analyzeUrl(url);
  
  