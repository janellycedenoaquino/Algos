// Object.assign({},objToCopy); they don't have the same reference because it is a copy! 
// Object.getPrototypeOf() //check all properties one can use for this object. not only objects but other data types as well. ex:
//for a string it creates a wrapper and uses treats it as an object for the time being to check the properties it has in it's prototype.
//let newObj =  Object.create(prototype you want to pass in )
//  Object.keys();
//  Object.values();
//  Object.entries()


console.clear();
let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

const attendanceCheck = (weekday) =>{
  let present = [];
  let week = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
  }
  weekday = week[weekday];
  for(let i = 0; i < classRoom.length; i++){
    for (student in classRoom[i]){
      let day = classRoom[i][student][weekday]
      
      console.log(Object.values(day)[0])
      if(Object.values(day)[0]){
        present.push(student)
      }
    } 
  }
  console.log(present)
  return present;
}


//creating a factory function with a specific prototype
const puppyProto = {
  bark() {
      console.log('Ruff, Ruff');
    },
    sleep() {
      console.log('zzzZZZZZzzzz');
    }
}

function puppyFactory(name, breed) {
  const newPuppy = Object.create(puppyProto);
  newPuppy.name = name;
  newPuppy.breed = breed;
  
  return newPuppy;
}

//factory f(x) redux uses factory f(x)

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}