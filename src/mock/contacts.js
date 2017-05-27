import Immutable from 'immutable';

const pratik = require('../../img/contacts/pratik.png');
const sanket = require('../../img/contacts/sanket.png');
const megha = require('../../img/contacts/megha.png');
const atul = require('../../img/contacts/atul.png');
const saurabh = require('../../img/contacts/saurabh.png');
const varun = require('../../img/contacts/varun.png');

const datas = [
  {
    id : 1,
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '3:43 pm',
    name: 'Pratik',
    surname: 'Kumar'
  },
  {
    id : 2,
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '1:12 pm',
    name: 'Kumar',
    surname: 'Sanket'
  },
  {
    id : 3,
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '10:03 am',
    name: 'Megha',
    surname: 'Kumar'
  },
  {
    id : 4,
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '5:47 am',
    name: 'Atul',
    surname: 'Ranjan'
  },
  {
    id : 5,
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '11:11 pm',
    name: 'Saurabh',
    surname: 'Sahu'
  },
  {
    id : 6,
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '8:54 pm',
    name: 'Varun',
    surname: 'Sahu'
  },
];

const contacts  = Immutable.fromJS(datas)
export default contacts
