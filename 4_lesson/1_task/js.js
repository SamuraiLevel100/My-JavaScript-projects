//Task_1
console.log('Task_1');
let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);
//Task_2
console.log('Task_2');
for(let i=0;i<arr.length;i++)
{
    console.log(`[${i+1}] - ${arr[i]}`);
}
//Task_3
console.log('Task_3');
console.log("Before sorting",arr);
arr.sort((a, b) => b - a); 
console.log("Sorted arr :", arr); 

//Task_5
console.log('Task_5');
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%7===0)
    {
        console.log(`Numbers are multiples of 7: [${arr[i]}]`);
    }
}

//Task_6
console.log('Task_6');
console.log("Before removing the first 3 items: ",arr);
arr.splice(0,3)
console.log("Delete the first 3 items",arr);

//Task_7
console.log('Task_7');
let counter=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2===0)
    {
        console.log(`Even numbers: [${arr[i]}]`);
        counter++;
    }

}
console.log(`The number of even elements: [${counter}]`);

//Task_8
console.log('Task_8');
const filterred=arr.filter((item,element)=>{
    return arr.indexOf(item)===element;
})
console.log("An array without repetitions:",filterred);



//Task_4
console.log('Task_4');
const helf=Math.floor(arr.length/2)
for(let i =helf;i<arr.length;i++)
{
    arr[i]=0;
}
console.log("An array where half of the values ​​are zero" ,arr);

