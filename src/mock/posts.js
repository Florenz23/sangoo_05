import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

const post1 = " Kommt ein Römer in die Bar, hebt zwei Finger und sagt: 'Fünf Bier bitt' #ausilmenau"
const post2 = " Gerade hat mein Nachbar geklingelt und mich angemotzt, weil ich heute so oft auf Klo gegangen bin und eben so spät schon wieder. Ab 10 gilt Nachruhe. uNd die Spülung würde nerven"
const post3 = " Wisst ihr zufällig, ob man im Bafögamt auch mal außerhalb der Sprchzeiten was persönlich abgeben kann= Oder dann eher in Kuvert und in Briefkasten? #jhj"

const reply_message_11 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_12 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_13 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

const replies1 = [reply11,reply12,reply13]
const userPost1 = new Post(1,post1,55,300,replies1,"#7cdbd5")
const userPost2 = new Post(2,post2,25,200,replies1,"#f53240")
const userPost3 = new Post(3,post3,15,100,replies1,"#f9be02")

const reply11 = new Reply(1,reply_message_11,10)
const reply12 = new Reply(2,reply_message_12,15)
const reply13 = new Reply(3,reply_message_13,20)

const muserPost1 = {
  id : 1,
  message : post1,
  rating : 55,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 13
    }
  ],
  bgColor : "#7cdbd5",
}
const muserPost2 = {
  id : 2,
  message : post1,
  rating : 45,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 13
    }
  ],
  bgColor : "#f53240",
}
const muserPost3 = {
  id : 3,
  message : post1,
  rating : 35,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 13
    }
  ],
  bgColor : "#f9be02",
}

posts  = [muserPost1,muserPost2,muserPost3]
const posts  = Immutable.fromJS(posts)

export default posts
