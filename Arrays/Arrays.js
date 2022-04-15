/*
Arrays -- list like data structure.

important properties:

arr.length              find the length
Array.isArray(arr)      check typeof for array
arr.push()              adds item to end
arr.unshift             adds item to front
arr.pop()               removes item from end
arr.shift()             removes item from front
arr.indexOf("item")     returns index of item if inside arr else returns -1 
arr.includes("item")    returns true or false 
arr.slice()             returns piece of arr you specify or could be used to make a copy of the entire array
arr.reverse             returns reversed arr, modifieds original array; it remains reversed.
arr.splice              changes the original array, adds/removes items from the middle of the array
arr.join(", ")          creates a string with all items separated by whatever you choose 
arr1.concat(arr2)       concatenates two arrays into a separate array (arr1 will be added first)
[...arrName]            creates a shallow copy of the array

all other methods and how they work:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const Arr = () =>{
    console.log('running from Array.js')
}

let flatArr = [];
const arrayFlattener = (arr)=>{
  for(let i = 0; i < arr.length; i++){
    
    if(typeof arr[i] === "object"){
      arrayFlattener(arr[i])
    }else{
      flatArr.push(arr[i]);
    }
  }
  if(flatArr.length === arr.length){
    return flatArr;
  }else{ 
    return flatArr.slice(flatArr.length-1 - arr.length-1, flatArr.length )
  }
}


const zooInventory = (multiDimenArr) =>{
    let arrOfstr = [];
    for(let i = 0; i < multiDimenArr.length; i++){
      arrOfstr.push(`${multiDimenArr[i][0]} the ${multiDimenArr[i][1][0]} is ${multiDimenArr[i][1][1]}.`);  
    }
    console.log('arrOfstr: ', arrOfstr);
    return arrOfstr
  }

module.exports = Arr;
