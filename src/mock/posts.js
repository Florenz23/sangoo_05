import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

const post1 = " Kommt ein Römer in die Bar, hebt zwei Finger und sagt: 'Fünf Bier bitt' #ausilmenau"
const post2 = " Gerade hat mein Nachbar geklingelt und mich angemotzt, weil ich heute so oft auf Klo gegangen bin und eben so spät schon wieder. Ab 10 gilt Nachruhe. uNd die Spülung würde nerven"
const post3 = " Wisst ihr zufällig, ob man im Bafögamt auch mal außerhalb der Sprchzeiten was persönlich abgeben kann= Oder dann eher in Kuvert und in Briefkasten? #jhj"

const reply11 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply12 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply13 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

const replies1 = [reply11,reply12,reply13]
const userPost1 = new Post(1,post1,55,300,replies1,"#7cdbd5")

const muserPost1 = {
  postId : 1,
  postMessage : post1,
  rating : 55,
  distance : 300,
  bgColor : "#7cdbd5",
  replies : 5,
  replyArray : [
    {
      replyId : 1,
      replyMessage:"moinmoin"
    }
  ]
}


const muserPost2 = {
  postId : 2,
  postMessage : post2,
  rating : 30,
  distance : 100,
  bgColor : "#f53240",
  replies : 8,
}
const muserPost3 = {
  postId : 3,
  postMessage : post3,
  rating : 82,
  distance : 200,
  bgColor : "#f9be02",
  replies : 2,
}


posts  = [muserPost1,muserPost2,muserPost3]
const posts  = Immutable.fromJS(posts)

console.log(posts)
export default posts
