function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: String interpolation for the whole array
console.log(`Hello, ${user.join(' ')}`); 
//Solution 2: Access individual elements
console.log(greeter(user[0]));
console.log(greeter(user[1]));