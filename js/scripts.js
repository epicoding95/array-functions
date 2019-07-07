

const items = [
  { name: 'Bike',     price: 100 },
  { name: 'TV',       price: 200 },
  { name: 'Album',    price: 10 },
  { name: 'Book',     price: 5 },
  { name: 'Phone',   price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
]


////filtered() allows you to go through the array and "filter" through it returning a new array containing what you return in the filtered array.

const filteredItems = items.filter((item) => {
  return item.price <= 200
})

console.log(filteredItems)




///// map() allows you to create a new array containing whatever you ask the original array to return so in this case it will return all of the items with their price

const itemNames = items.map((item) =>{
  return item.price
});

console.log(itemNames);



///find() allows you to search through an array and see if the array contains what youre looking for so in this case we are looking to see if there are any names in our array named "Album"

const foundItem = items.find((item) => {
  return item.name === 'Album'
})
console.log(foundItem);





/////forEach() allows you to go through the array and return whatever all of the values that youre looking for so in this case were looking for all of the items prices.

items.forEach((item) => {
console.log(item.price)
})



////////some()... returns true or false.. only one has to be true/false

const hasInexpensiveItems = items.some((item) =>{
  return item.price <= 1000
})
console.log(hasInexpensiveItems);

///// every() returns true or false... all have to be true or false
const hasInexpensiveItems2 = items.every((item) => {
  return item.price <= 100
})
console.log(hasInexpensiveItems2);

//// reduce has 2 parameters currentToal and item, the 0 at the bottom of the function is where youre starting and telling it to calculate the total with this function so in this example is 1840.
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)
console.log(total);


/////includes method checks to see if whatever you add in the parameter is actually in the array youre comparing it to.
const array= [1,2,3,4,5];

const includesTwo = array.includes(7)

console.log(includesTwo);
