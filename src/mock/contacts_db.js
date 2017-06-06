import React from 'react'
import Immutable from 'immutable';

import Realm from 'realm'
// Define your models and their properties
const pratik = require('../../img/contacts/pratik.png');

class Contact {}
Contact.schema = {
  name: 'Contact',
  properties: {
    id : 'int',
    text: 'string',
    note: 'string',
    time: 'string',
    name: 'string',
    surname: 'string',
    surname: 'string',
    img: 'string', // optional property
  }
};
class ContactList {}
ContactList.schema = {
  name: 'ContactList',
  properties: {
    name:    {type: 'string'},
    contacts:    {type: 'list', objectType: 'Contact'},
  }
};

// Get the default Realm with support for our objects
let realm = new Realm({schema: [Contact, ContactList]});

// Create Realm objects and write to local storage
const createDummy = () => {
  realm.write(() => {
    let kumar = realm.create('Contact', {
      id : 1,
      text: 'Kumar Pratik',
      note: 'Its time to build a difference',
      time: '3:43',
      name: 'Kumar',
      surname: 'Pratik',
      img: 'pratik',
    });
    let sanket = realm.create('Contact', {
      id : 2,
      text: 'Kumar Sanketk',
      note: 'One needs courage to be happy and smiling all time . ',
      time: '3:43',
      name: 'Kumar',
      surname: 'Sanket',
      img: 'sanket',
    });
    let megha = realm.create('Contact', {
      id : 3,
      text: 'Megha Jojo',
      note: 'Live a life style that matchs your visio',
      time: '3:43',
      name: 'Megha',
      surname: 'Jojo',
      img: 'megha',
    });
  });
}

const iniRealm = () => {
  let contactsRealm = realm.objects('Contact')
  if (contactsRealm.length == 0 ){
    createDummy()
  }
}
iniRealm()

// Query Realm for all cars with a high mileage
let contactsRealm = realm.objects('Contact')
console.log(contactsRealm[0].text)
console.log(contactsRealm.length)



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

export default contactsRealm
