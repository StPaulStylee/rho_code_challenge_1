/*
1 - Create an object literal named prime with the properties:
    - city
    - state
    - zip
Assign the values based on Prime's address.
*/

/*
2 - Using dot notation, create a new property for prime. This property will
    be called address and will  take the value of Prime's street address.
*/

/*
3 - Using dot notation, create a new method for prime. This method will
    console log out the complete address of prime. Call the new property/method print.
*/

var prime = {
  city: 'Bloomington',
  state: 'Minnesota',
  zip: 55431,
};

prime.address = prime.city + ', ' + prime.state + ', ' + prime.zip;

prime.print = function() {
  console.log(prime.address);
}
