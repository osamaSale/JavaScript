// Objects in JavaScript


// Practice

// const person = {name: "john", age:20}
// curly brackets instead of square ones
// missing quotes

// const car = {brand: "Toyota", model: 2020}
// missing a colon after brand

// const employee ={name: "Jane", position: "developer"}
// missing quotes


// - access the age property
// - modify the person's age to be 23 years old
// - add a property called `work` with the value of an object with two keys position and salary
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  };
  
  // person.age;
  // person.age = 23;
  // person.work = {position:"Junior Developer", salary:800};
  
  // - access the first name property of both employees
  // - add an employee object with your name and the position of full-stack developer
  const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
    {
        id: 3,
      name: {
        first: "Alex",
        last: "Smith",
      },
      position: "Full-stack Developer",
    },
  ];
  
  // employees[0].name.first;
  // employees[1].name.first;
  
  // - access the model value of both cars
  // - change the prius model from 2019 to 2020
  // - add a new car of your choice
  // - add a property `isAutomatic` for all three cars
  const cars = {
    toyota: {
      name: "prius",
      model: 2019,
      isAutomatic: true,
    },
    nissan: {
      name: "leaf",
      model: 2020,
      isAutomatic: true,
    },
    bmw: {
      name: "i8",
      model: 2020,
      isAutomatic: true,
    },
  };
  
  // cars.toyota.model;
  // cars.nissan.model;
  // cars.toyota.model = 2020;
  
  const createCar = function (brand, name, color) {
     return {brand: brand, name: name, color: color};
  };
  
  // createCar("Toyota", "Prius", "Black");
  
  const getFullName = function (person) {
    return person.first + " " + person.middle + " " + person.last;
  };
  
  // getFullName({ first: "Elon", middle: "Reeve ", last: "Musk" });
  // getFullName({ first: "John", middle: "Mark ", last: "Doe" });
  
  const olderThan = function (personOne, personTwo) {
    if (personOne.age > personTwo.age){
        return personOne.name + " is older than " + personTwo.name;
    }
    else if (personOne.age < personTwo.age){
      return personTwo.name + " is older than " + personOne.name;
    }
    else {
      return personTwo.name + " is as old as " + personOne.name;
    }
  };
  
  // olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 });
  // olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); 
  // olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); 
  
  // - access the value of Sarah's children and the value of Samuel's children
  // - add a child for Samuel named Sam that has two children Marry and Gwen
  // - delete the children property from the people who don't have children
  // HINT: read about the delete operator
  const family = {
    name: "John",
    children: [
      {
        name: "Bill",
        children: [
          {
            name: "Mark",
            children: [],
          },
          {
            name: "Sarah",
            children: [
              {
                name: "Smith",
                children: [],
              },
              {
                name: "Stan",
                children: [],
              },
            ],
          },
          {
            name: "Samuel",
            children: [],
          },
        ],
      },
      {
        name: "Jane",
        children: [],
      },
    ],
  };
  
  // family.children[0].children[1].children
  // family.children[0].children[2].children
  /* family.children[0].children[2].children.push({
          name: "Marry",
            children: [],
          },{
            name: "Gwen",
            children: [],
         },)
  */
  // delete family.children[1].children
  // family.children[0].children[0].children
  // delete family.children[0].children[1].children[0]
  // delete family.children[0].children[1].children[1]
  // delete family.children[0].children[2].children[0]
  // delete family.children[0].children[2].children[1]
  
  const createIceCream = function (coneType, iceCreamFlavour, topping) {
    // if topping is undefined none will be the default value
    topping = topping || "none"
    return {coneType: coneType, iceCreamFlavour: iceCreamFlavour, topping: topping}
  };
  
  // createIceCream("wafer cone", "chocolate"); 
  // createIceCream("waffle cone", "vanilla", "chocolate syrup"); 
  // createIceCream("sugar cone", "strawberry", "cherry"); 
  
  const employeeOne = {
    id: 0,
    name: "John",
    position: "",
  };
  
  const employeeTwo = {
    id: 1,
    name: "Jane",
    position: "Developer",
  };
  
  // try the following and explain the results
  // 1
  if (employeeOne.id) {
    console.log(employeeOne.name);
  }
  // the id is equal to 0 so the condition will fail since it is a falsy value
  // 2
  if (employeeTwo.id) {
   // console.log(employeeOne.name);
  }
  // the id is equal to 1 so the condition will pass and the name will be logged  since 1 is a truthy value
  //3
  if (employeeOne.position) {
   // console.log(employeeOne.name);
  }
  // the position value is an empty string which is a falsy value so condition will fail
  //4
  if (employeeTwo.position) {
    //console.log(employeeOne.name);
  }
  // the position is a string and that is a truthy value so the emp name will be logged
  //5
  if (employeeOne.salary) {
   // console.log(employeeOne.name);
  }
  // salary is't an attribute of employeeOne so the value of it will be undefined which is a falsy value so the condition will fail
  
  
  // things to validate:
  // 1- length of the email is greater than or equal 6
  // 2- length of the password is greater than or equal 8
  // 3- email contains `@` and `.com`
  // 4- the user must be in the users object
  // 5- both of the passwords match
  // 6- when you compare information make sure to reference the users object and access the value form there
  const users = {
    mrpotato: {
      email: "mr.potato@gmail.com",
      password: "LonelyPotato",
    },
    thewiseman: {
      email: "wiseMan9999@gmail.com",
      password: "12345678",
    },
  };
  
  const isValidUser = function (loginInfo) {
      const email = loginInfo.email
      const password = loginInfo.password
      const username = loginInfo.username.toLowerCase()
      if (email.length >= 6 && password.length >= 8){
          if ( email.includes("@") && email.includes(".com")){
              if (email === users[username].email && password === users[username].password){
               return true
              }     			
          }
    }
    return false
  };
  
  /* 
  isValidUser({
    username: "MrPotato",
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  });
  
  isValidUser({
    username: "MrPotato",
    email: "mr.potato@gmail.com",
    password: "Lonely",
  });
  
  isValidUser({
    username: "MrPotato",
    email: "mr.potato.gmail.com",
    password: "LonelyPotato",
  });
  */
  
  const isPropertyOf = function (string, object) {
    /* if (object[string]){
         return true 
    }
    return false */
    return object.hasOwnProperty(string)
  };
  
  // isPropertyOf("hello", { hello: "world" });
  // isPropertyOf("world", { hello: "world" });