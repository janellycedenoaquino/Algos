const countDown = (number) =>{
    if(number <= 0){
        console.log(number)
        return
    }

    console.log(number)
    countDown(number-1);
    
}

// console.log(countDown(5))


const factorial = (number) =>{
    if(number === 1 || number === 0){
        return 1;
    }else if(number < 0){
        console.log('item must be positive')
        return 'nope'
    }

    let total = number * factorial(number-1)
    console.log(total)
    return total;

}

const backwardString = (str) =>{
    if(str.length === 0){
      return str;
    }
    
    console.log(str.slice(str.length-1))
    
    backwardString(str.slice(0, str.length-1))
    
  }
  
const sumNums = (num) =>{
  if(num === 1){
    console.log(num)
    return num;
  }
  let total = num + sumNums(num-1)
  console.log(total)
  return total
}  

factorial(-5);