import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

const post1 = " Kommt ein Römer in die Bar, hebt zwei Finger und sagt: 'Fünf Bier bitt' #ausilmenau"
const post2 = " Gerade hat mein Nachbar geklingelt und mich angemotzt, weil ich heute so oft auf Klo gegangen bin und eben so spät schon wieder. Ab 10 gilt Nachruhe. uNd die Spülung würde nerven"
const post3 = " Wisst ihr zufällig, ob man im Bafögamt auch mal außerhalb der Sprchzeiten was persönlich abgeben kann= Oder dann eher in Kuvert und in Briefkasten? #jhj"

const reply_message_11 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_12 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_13 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

const reply_11 = new Reply(1,reply_message_11,10)
const reply_12 = new Reply(2,reply_message_11,40)
const reply_13 = new Reply(3,reply_message_11,30)

const replies2 = [reply_11,reply_12,reply_13]
const replies1 = ["jo","jo","moin"]
const userPost1 = new Post(1,post1,55,300,replies1,"#7cdbd5")
const userPost2 = new Post(2,post2,25,200,replies1,"#f53240")
const userPost3 = new Post(3,post3,15,100,replies1,"#f9be02")

posts  = [userPost1,userPost2,userPost3]
const posts  = Immutable.fromJS(posts)

console.log(posts)
export default posts
