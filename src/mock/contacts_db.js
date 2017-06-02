import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties
class Car {}
Car.schema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: 'int',
  }
};
class Person {}
Person.schema = {
  name: 'Person',
  properties: {
    name:    {type: 'string'},
    cars:    {type: 'list', objectType: 'Car'},
    picture: {type: 'data', optional: true}, // optional property
  }
};

// Get the default Realm with support for our objects
let realm = new Realm({schema: [Car, Person]});

// Create Realm objects and write to local storage
realm.write(() => {
  let myCar = realm.create('Car', {
    make: 'Honda',
    model: 'Civic',
    miles: 1000,
  });
  myCar.miles += 20; // Update a property value
});

// Query Realm for all cars with a high mileage
let cars = realm.objects('Car').filtered('miles > 1000');

// Will return a Results object with our 1 car
console.log(cars.length)

// Add another car
realm.write(() => {
  let myCar = realm.create('Car', {
    make: 'Ford',
    model: 'Focus',
    miles: 2000,
  });
});

console.log(cars.length)



const pratik = require('../../img/contacts/pratik.png');
const sanket = require('../../img/contacts/sanket.png');
const megha = require('../../img/contacts/megha.png');
const atul = require('../../img/contacts/atul.png');
const saurabh = require('../../img/contacts/saurabh.png');
const varun = require('../../img/contacts/varun.png');

const contacts = [
  {
    id : 1,
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '3:43 pm',
  },
  {
    id : 2,
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '1:12 pm',
  },
  {
    id : 3,
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '10:03 am',
  },
  {
    id : 4,
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '5:47 am',
  },
  {
    id : 5,
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '11:11 pm',
  },
  {
    id : 6,
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '8:54 pm',
  },
];

export default contacts
